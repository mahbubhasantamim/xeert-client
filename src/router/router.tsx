import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/pages/error/Error.page";
import HomePage from "../views/pages/home/Home.page";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path: "/",
        element: <HomePage />
      }
    ]
  },
]);

export default router;
