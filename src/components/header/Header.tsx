import React from "react";
import Logo from "./utilities/Logo";
import NavBar from "./utilities/NavBar";
import LangSwitcher from "./utilities/LangSwitcher";
import { Link } from "react-router-dom";
import '../../styles/header/header.scss';

const Header = () => {
    
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <Logo/>
                </Link>
                <NavBar/>
                <LangSwitcher/>
            </div>
        </header>
    )
};

export default Header;