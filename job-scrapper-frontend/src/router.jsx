import {createBrowserRouter, Navigate} from "react-router-dom";
import MainView from "./component/MainView";
import Offers from "./component/Offers";
import MainLayout from "./component/MainLayout"

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Offers />
            },
            {
                path: "/page/:id",
                element: <Offers />
            },
            {
                path: "/filter/:city",
                element: <Offers />
            },
            {
                path: "/page/:id/filter/:city",
                element: <Offers />
            },
        ]
    }
])

export default router;
