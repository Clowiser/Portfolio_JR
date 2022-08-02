import React, {useContext} from "react";
import {Outlet} from "react-router-dom";
import Nav from "./Nav/Nav";

interface IHeader {
}

const Header = (props: IHeader) => {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    );
}

export default Header;