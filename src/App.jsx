import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { loader as postsLoader } from "./pages/Home";
import { action as createPostAction } from "./pages/CreatePost";
import { loader as individualPostLoader } from "./pages/PostDetails";

const RootLayout = lazy(() => import("./layouts/RootLayout"));
const Home = lazy(() => import("./pages/Home"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const PostDetails = lazy(() => import("./pages/PostDetails"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: postsLoader,
          children: [
            {
              path: "create-post",
              element: <CreatePost />,
              action: createPostAction,
            },
            {
              path: ":id",
              element: <PostDetails />,
              loader: individualPostLoader,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
