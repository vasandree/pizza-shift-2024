import {createBrowserRouter} from "react-router-dom";
import {routes} from "../utils/consts";
import {MainPage} from "../pages";
import {Layout} from "./Layout.tsx";

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