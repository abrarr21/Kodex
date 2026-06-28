import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import DataWithQuery from "./components/DataWithQuery";
import PaginatedData from "./components/PaginatedData";
import InfiniteScroll from "./components/InfiniteScroll";
import UpdateData from "./components/UpdataData";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/data",
      element: <DataWithQuery />,
    },
    {
      path: "/paginate-data",
      element: <PaginatedData />,
    },
    {
      path: "/infinite-data",
      element: <InfiniteScroll />,
    },
    {
      path: "/create-post",
      element: <UpdateData />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
