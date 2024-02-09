import React, { useEffect } from "react";
import NavBar from "./NavBar";
import LangSwitcher from "./LangSwitcher";
import '../../../styles/head/header-utilities/MobileMenu.scss';

const MobileMenu = ({className, isMenuOpened}: {className: string, isMenuOpened: boolean}) => {

    useEffect(() => {
        const menu = document.querySelector(`.mobile-menu`);
        menu?.classList.toggle(`opened`);

        isMenuOpened ? document.body.style.overflowY = `hidden` : document.body.style.overflowY = `auto`; 
    }, [isMenuOpened]);

    return (
        <div className="mobile-menu">
            <NavBar className={className}/>
            <LangSwitcher className={className}/>
        </div>
    );
};

export default MobileMenu;