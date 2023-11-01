import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import { Auth } from "./Auth";
import { Profile } from "../pages/Profiled/Profile";
import { AddProduct } from "../pages/Profiled/AddProduct";

const Router = () => {
  return useRoutes([
    { path: "*", element: <h1>ERROR 404 PAGE NOT FOUND</h1> },
    {
      path: "",
      element: <Layout />,
      children: [{ path: "", element: <Home /> }],
    },
    {
      path: "",
      element: <Auth />,
      children: [
        {
          path: "profile",
          element: <Profile />,
          children: [{ path: "addProduct", element: <AddProduct /> }],
        },
      ],
    },
  ]);
};

export default Router;
