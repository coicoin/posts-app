import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "@/config/environment";
import { LIST, METHOD, tags, types } from "@/shared/constants/constants";
import type { TAlbum } from "@/entities/album/model/types";

// Define a service using a base URL and expected endpoints
export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiOrigin }),
  tagTypes: [tags.album],
  endpoints: (build) => ({
    getAlbums: build.query<TAlbum[], void>({
      query: () => "/albums",
      keepUnusedDataFor: 60,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.album, id })),
              { type: types.album, id: LIST },
            ]
          : [{ type: types.album, id: LIST }],
    }),

    getAlbumsByUserId: build.query<TAlbum[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.album, id })),
              { type: types.album, id: `USER_ID-${userId}` },
            ]
          : [],
    }),

    addAlbum: build.mutation<TAlbum, Partial<TAlbum>>({
      query: (body) => ({ url: "albums", method: METHOD.POST, body }),
      invalidatesTags: [{ type: types.album, id: LIST }],
    }),

    deleteAlbum: build.mutation<void, number>({
      query: (id) => ({ url: `albums/${id}`, method: METHOD.DELETE }),
      invalidatesTags: (_result, _error, id) => [
        { type: types.album, id },
        { type: types.album, id: LIST },
      ],
    }),
  }),
});

// auto-generated based on the defined endpoints
export const {
  useGetAlbumsQuery,
  useGetAlbumsByUserIdQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi;
