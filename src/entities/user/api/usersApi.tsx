import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "@/config/environment";
import type { TUser } from "@/entities/user/model/types";
import { LIST, METHOD, tags, types } from "@/shared/constants/constants";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiOrigin }),
  tagTypes: [tags.user],
  endpoints: (build) => ({
    getUsers: build.query<TUser[], void>({
      query: () => "/users",
      keepUnusedDataFor: 60,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.user, id })),
              { type: types.user, id: LIST },
            ]
          : [{ type: types.user, id: LIST }],
    }),

    getUserById: build.query<TUser, number>({
      query: (id: number) => `/users/${id}`,
      providesTags: (_result, _error, id) => [{ type: types.user, id }],
    }),

    addUser: build.mutation<TUser, Partial<TUser>>({
      query: (body) => ({ url: "users", method: METHOD.POST, body }),
      invalidatesTags: [{ type: types.user, id: LIST }],
    }),

    deleteUser: build.mutation<void, number>({
      query: (id) => ({ url: `users/${id}`, method: METHOD.DELETE }),
      invalidatesTags: (_result, _error, id) => [
        { type: types.user, id },
        { type: types.user, id: LIST },
      ],
    }),
  }),
});

// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetUserByIdQuery, useAddUserMutation } =
  usersApi;
