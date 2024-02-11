import React, { useEffect } from "react";
import NavBar from "../../../header/utilities/Navigation";
import LangSwitcher from "../../../header/utilities/LangSwitcher";
import '../../../../styles/main/MobileMenu.scss';
import { useSelector } from "react-redux";

const MobileMenu = () => {

    const isMobileMenuOpened = useSelector((state) => state.menuVisibility.value);
    
    useEffect(() => {
        const menu = document.querySelector(`.mobile-menu`);
        menu?.classList.toggle(`opened`);

        isMobileMenuOpened ? document.body.style.overflowY = `hidden` : document.body.style.overflowY = `auto`; 
    }, [isMobileMenuOpened]);

    return (
        <div className="mobile-menu">
            <NavBar/>
            <LangSwitcher/>
        </div>
    );
};

export default MobileMenu;