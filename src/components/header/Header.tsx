import React, { useEffect, useState } from "react";
import Logo from "./utilities/Logo";
import NavBar from "./utilities/NavBar";
import MobileMenu from "./utilities/MobileMenu";
import LangSwitcher from "./utilities/LangSwitcher";
import { Link } from "react-router-dom";
import '../../styles/head/header.scss';

const Header = () => {

    const [isDesktop, setIsDesktop] = useState<boolean>();
    const [className, setClassName] = useState<string>(``);
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const handleMenuAction = () => {
        setIsMenuOpened((currentState) => !currentState);
    };

    useEffect(() => {
        window.innerWidth > 991 ? setIsDesktop(true) : setIsDesktop(false);
    }, [window.innerWidth]);

    useEffect(() => {
        isDesktop ? setClassName(`desktop`) : setClassName(`mobile`);
    }, [isDesktop]);

    useEffect(() => {
        const hamburger = document.querySelector(`.hamburger`);
        hamburger?.classList.toggle(`hamburger-active`);
    }, [isMenuOpened]);
    
    return (
        <>
            <header>
                <div className="container">
                    <Link to="/">
                        <Logo/>
                    </Link>
                    {isDesktop ? 
                        <>
                            <NavBar className={className}/>
                            <LangSwitcher className={className}/>
                        </>
                        :
                        <div className="hamburger" onClick={handleMenuAction}>
                            <div className="hamburger__line"></div>
                            <div className="hamburger__line"></div>
                            <div className="hamburger__line"></div>
                        </div>
                    }
                </div>
            </header>
            {!isDesktop && 
                <MobileMenu 
                    className={className} 
                    isMenuOpened={isMenuOpened} 
                /> 
            }
        </>

    )
};

export default Header;