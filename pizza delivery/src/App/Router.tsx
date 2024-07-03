import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import {routes} from "../Consts";
import {MainPage} from "../Pages";

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