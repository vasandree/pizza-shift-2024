import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import {routes} from "../utils/consts";
import {MainPage} from "../pages";

export const Router = createBrowserRouter([{
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: routes.root(),
                element: <MainPage/>
            }
        ]
    }]
)