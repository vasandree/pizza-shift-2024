import {Outlet} from "react-router-dom";
import {Header} from "../components/systemComponents";

export const Layout = () => (
    <>
        <Header/>
        <Outlet/>
    </>
)

