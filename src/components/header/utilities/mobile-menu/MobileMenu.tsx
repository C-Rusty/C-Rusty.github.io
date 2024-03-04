import React  from "react";
import '../../../../styles/head/header-utilities/mobile-menu.scss';
import NavBar from '../Navigation';
import LangSwitcher from "../LangSwitcher";


const MobileMenu = () => {

    return (
        <>
            <NavBar/>
            <LangSwitcher/>
        </>
    );
};

export default MobileMenu;