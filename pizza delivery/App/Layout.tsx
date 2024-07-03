import {Header} from "../src/Components";
import {Outlet} from "react-router-dom";

const Layout = () => (
    <>
        <Header/>
        <Outlet/>
    </>
)

export default Layout