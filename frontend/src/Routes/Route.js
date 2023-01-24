import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Pages/AddPage/AddPage";
import DetailPage from "../Pages/DetailPage/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/addpage",
        element: <AddPage/>
    },
    {
        path: "/details/:id",
        element: <DetailPage/>
    }
])