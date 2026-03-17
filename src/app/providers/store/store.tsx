import { postsApi } from "@/entities/post/api/postsApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import postReducer from "@/entities/post/model/slice/postSlice";
import userReducer from "@/entities/user/model/slice/userSlice";
import { commentsApi } from "@/entities/comments/api/commentsApi";
import { albumsApi } from "@/entities/album/api/albumsApi";
import { todosApi } from "@/entities/todo/api/todosApi";
import { usersApi } from "@/entities/user/api/usersApi";
import { photosApi } from "@/entities/photos/api/photosApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
    //Slices
    post: postReducer,
    user: userReducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(commentsApi.middleware)
      .concat(albumsApi.middleware)
      .concat(todosApi.middleware)
      .concat(photosApi.middleware)
      .concat(usersApi.middleware),

  devTools: import.meta.env.MODE !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
