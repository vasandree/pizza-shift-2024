import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import {routes} from "../src/Consts/routes.ts";
import MainPage from "../src/Pages/MainPage/MainPage.tsx";

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