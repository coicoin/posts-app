import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "@/config/environment";
import { LIST, METHOD, tags, types } from "@/shared/constants/constants";
import type { TTodo } from "@/entities/todo/model/types";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiOrigin }),
  tagTypes: [tags.todo],
  endpoints: (build) => ({
    getTodos: build.query<TTodo[], void>({
      query: () => "/todos",
      keepUnusedDataFor: 60,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.todo, id })),
              { type: types.todo, id: LIST },
            ]
          : [{ type: types.todo, id: LIST }],
    }),

    getTodosByUserId: build.query<TTodo[], number>({
      query: (userId) => `todos?userId=${userId}`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.todo, id })),
              { type: types.todo, id: `USER_ID-${userId}` },
            ]
          : [],
    }),

    addTodo: build.mutation<TTodo, Partial<TTodo>>({
      query: (body) => ({ url: "todos", method: METHOD.POST, body }),
      invalidatesTags: [{ type: types.todo, id: LIST }],
    }),

    deleteTodo: build.mutation<void, number>({
      query: (id) => ({ url: `todos/${id}`, method: METHOD.DELETE }),
      invalidatesTags: (_result, _error, id) => [
        { type: types.todo, id },
        { type: types.todo, id: LIST },
      ],
    }),
  }),
});

// auto-generated based on the defined endpoints
export const {
  useGetTodosQuery,
  useGetTodosByUserIdQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
