import {Outlet} from "react-router-dom";
import {Header} from "../components/systemComponents";

const Layout = () => (
    <>
        <Header/>
        <Outlet/>
    </>
)

export default Layout