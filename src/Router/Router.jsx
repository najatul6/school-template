import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Product/Product";
import Pricing from "../Pages/Pricing/Pricing";
import LogIn from "../Pages/LogIn/LogIn";
import JoinUs from "../Pages/JoinUs/JoinUs";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
    ],
  },
  {
    path: "/logIn",
    element: <LogIn />,
  },
  {
    path: "/joinUs",
    element: <JoinUs />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
]);

export default Router;
