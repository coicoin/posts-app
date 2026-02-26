import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "@/config/environment";
import { LIST, METHOD, tags, types } from "@/shared/constants/constants";
import type { TComment } from "@/entities/comments/model/types";

// Define a service using a base URL and expected endpoints
export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiOrigin }),
  tagTypes: [tags.comment],
  endpoints: (build) => ({
    getComments: build.query<TComment[], void>({
      query: () => "/comments",
      keepUnusedDataFor: 60,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.comment, id })),
              { type: types.comment, id: LIST },
            ]
          : [{ type: types.comment, id: LIST }],
    }),

    // added for loading effect when tap to comments
    getCommentsByPostIdCount: build.query<number, number>({
      query: (postId: number) => `/comments?postId=${postId}`,
      transformResponse: (response: TComment[]) => response.length,
      providesTags: (_result, _error, postId) => [
        { type: types.comment, id: `POST_ID-${postId}` },
      ],
    }),

    getCommentsByPostId: build.query<TComment[], number>({
      query: (postId: number) => `/comments?postId=${postId}`,
      providesTags: (result, _error, postId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.comment, id })),
              { type: types.comment, id: `POST_ID-${postId}` },
            ]
          : [],
    }),

    addComment: build.mutation<TComment, Partial<TComment>>({
      query: (body) => ({ url: "comments", method: METHOD.POST, body }),
      invalidatesTags: [{ type: types.comment, id: LIST }],
    }),

    deleteComment: build.mutation<void, number>({
      query: (id) => ({ url: `comments/${id}`, method: METHOD.DELETE }),
      invalidatesTags: (_result, _error, id) => [
        { type: types.comment, id },
        { type: types.comment, id: LIST },
      ],
    }),
  }),
});

// auto-generated based on the defined endpoints
export const {
  useGetCommentsQuery,
  useGetCommentsByPostIdQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsByPostIdCountQuery,
} = commentsApi;
