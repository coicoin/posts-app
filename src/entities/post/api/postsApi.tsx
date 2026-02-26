import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "@/config/environment";
import type { TPost } from "@/entities/post/model/types";
import { LIST, METHOD, tags, types } from "@/shared/constants/constants";

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiOrigin }),
  tagTypes: [tags.post],
  endpoints: (build) => ({
    getPosts: build.query<TPost[], void>({
      query: () => "/posts",
      keepUnusedDataFor: 60, // 60 seconds, default value
      //providesTags: [tags.post], // list tagged as "Post", not optimaized
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.post, id })),
              { type: types.post, id: LIST },
            ]
          : [{ type: types.post, id: LIST }],
    }),

    getPostById: build.query({
      query: (id: number) => `/posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: types.post, id }],
    }),

    getPostsByUserId: build.query<TPost[], number>({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.post, id })),
              { type: types.post, id: `USER_ID-${userId}` },
            ]
          : [],
    }),

    addPost: build.mutation<TPost, Partial<TPost>>({
      query: (body) => ({ url: "posts", method: METHOD.POST, body }),
      invalidatesTags: [{ type: types.post, id: LIST }],
    }),

    deletePost: build.mutation<void, number>({
      query: (id) => ({ url: `posts/${id}`, method: METHOD.DELETE }),
      invalidatesTags: (_result, _error, id) => [
        { type: types.post, id },
        { type: types.post, id: LIST },
      ],
    }),
  }),
});

// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByUserIdQuery,
  useAddPostMutation,
} = postsApi;
