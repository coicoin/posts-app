import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "@/config/environment";
import { LIST, METHOD, tags, types } from "@/shared/constants/constants";
import type { TPhoto } from "../model/types";

// Define a service using a base URL and expected endpoints
export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl: environment.apiOrigin }),
  tagTypes: [tags.photo],
  endpoints: (build) => ({
    getPhotos: build.query<TPhoto[], void>({
      query: () => "/photos",
      keepUnusedDataFor: 60,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.photo, id })),
              { type: types.photo, id: LIST },
            ]
          : [{ type: types.photo, id: LIST }],
    }),

    getPhotosByAlbumId: build.query<TPhoto[], number>({
      query: (albumId: number) => `/photos?albumId=${albumId}`,
      providesTags: (result, _error, albumId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: types.photo, id })),
              { type: types.photo, id: `ALBUM_ID-${albumId}` },
            ]
          : [],
    }),

    addPhoto: build.mutation<TPhoto, Partial<TPhoto>>({
      query: (body) => ({ url: "photos", method: METHOD.POST, body }),
      invalidatesTags: [{ type: types.photo, id: LIST }],
    }),

    deletePhoto: build.mutation<void, number>({
      query: (id) => ({ url: `photos/${id}`, method: METHOD.DELETE }),
      invalidatesTags: (_result, _error, id) => [
        { type: types.photo, id },
        { type: types.photo, id: LIST },
      ],
    }),
  }),
});

// auto-generated based on the defined endpoints
export const {
  useGetPhotosQuery,
  useGetPhotosByAlbumIdQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photosApi;
