import {Header} from "../Components";
import {Outlet} from "react-router-dom";

const Layout = () => (
    <>
        <Header/>
        <Outlet/>
    </>
)

export default Layout