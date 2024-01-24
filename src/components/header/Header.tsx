import React from "react";
import Logo from "./utilities/Logo";
import NavBar from "./utilities/NavBar";
import LangSwitcher from "./utilities/LangSwitcher";
import '../../styles/Header/Header.scss';

const Header = () => {
    
    return (
        <header>
            <div className="container">
                <Logo/>
                <NavBar/>
                <LangSwitcher/>
            </div>
        </header>
    )
};

export default Header;