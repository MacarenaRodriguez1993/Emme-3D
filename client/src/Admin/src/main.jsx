import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import Userlist from "./pages/Userlist/Userlist";
import User from "./pages/user/User";
import Newuser from "./pages/newuser/Newuser";
import Productlist from "./pages/productlist/Productlist";
import Product from "./pages/product/Product";
import Newproduct from "./pages/newproduct/Newproduct";

const router = createBrowserRouter([
  {
    element: <Topbar />,
    children: [
      { path: "/users", element: <Userlist /> },
      { path: "/", element: <Home /> },
      { path: "/user/:userId", element: <User /> },
      { path: "/newuser", element: <Newuser /> },
      { path: "/products", element: <Productlist /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/newproduct", element: <Newproduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
