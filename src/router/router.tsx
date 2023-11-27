import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SingleProductPage from "../views/pages/SingleProduct/SingleProductPage";
import CartPage from "../views/pages/cart/CartPage";
import ErrorPage from "../views/pages/error/Error.page";
import HomePage from "../views/pages/home/Home.page";
import ShopPage from "../views/pages/shop/ShopPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/products/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
