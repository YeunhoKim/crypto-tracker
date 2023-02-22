import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Coins />,
    },
    {
      path: "/:coinId/*",
      element: <Coin />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
