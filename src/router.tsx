import Home from "./pages/Home";
import Callback from "./pages/CallBack";
import { createBrowserRouter } from "react-router-dom";

const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
];

export const router = createBrowserRouter(routesConfig);

export default routesConfig;
