import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { loader as postLoader } from "./pages/Home";

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
          loader: postLoader,
          children: [
            {
              path: "create-post",
              element: <CreatePost />,
            },
            {
              path: ":id",
              element: <PostDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
