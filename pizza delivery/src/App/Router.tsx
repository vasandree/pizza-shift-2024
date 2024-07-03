import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import MainPage from "../Pages/MainPage/MainPage.tsx";
import {routes} from "../Consts";

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