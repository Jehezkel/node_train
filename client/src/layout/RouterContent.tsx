import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import PostsPage from "../pages/Posts";
import Root from "./Root";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/posts", element: <PostsPage /> },
    ],
  },
]);
