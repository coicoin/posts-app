import { createBrowserRouter } from "react-router";
import { MainLayout } from "@/shared/layouts/main-layout/MainLayout";
import { PostsPage } from "@/pages/PostsPage";
import { PostCardPage } from "@/pages/PostCardPage";
import { UserPage } from "@/pages/UserPage";
import { UserAlbumsPage } from "@/pages/UserAlbumsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { UserLayout } from "@/shared/layouts/user-layout/UserLayout";
import { UsersPage } from "@/pages/UsersPage";
import { UserTodosPage } from "@/pages/UserTodosPage";
import { UserPostsPage } from "@/pages/UserPostsPage";
import { UserPhotosPage } from "@/pages/UserPhotosPage";
import { MainPage } from "@/pages/MainPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "posts/:id", element: <PostCardPage /> },
      { path: "users", element: <UsersPage /> },
      {
        path: "users/:id",
        element: <UserLayout />,
        children: [
          { index: true, element: <UserPage /> },
          { path: "albums", element: <UserAlbumsPage /> },
          { path: "albums/:id/photos", element: <UserPhotosPage /> },
          { path: "todos", element: <UserTodosPage /> },
          { path: "posts", element: <UserPostsPage /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export { router };
