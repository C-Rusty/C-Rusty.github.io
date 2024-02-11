import React, { useEffect, useState } from "react";
import Logo from "./utilities/Logo";
import Navigation from "./utilities/Navigation";
import LangSwitcher from "./utilities/LangSwitcher";
import { Link } from "react-router-dom";
import '../../styles/head/header.scss';
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../store/ShowMenuReducer";
import { setScreen } from "../../store/DeviceTypeReducer";

const Header = () => {

    const [isDesktop, setIsDesktop] = useState<boolean>();
    const [className, setClassName] = useState<string>(``);

    const isMobileMenuOpened = useSelector((state) => state.menuVisibility.value);
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch(setState(!isMobileMenuOpened));
    };

    useEffect(() => {
        window.innerWidth > 991 ? setIsDesktop(true) : setIsDesktop(false);
    }, [window.innerWidth]);

    useEffect(() => {
        isDesktop ? dispatch(setScreen(`desktop`)) : dispatch(setScreen(`mobile`));
    }, [isDesktop]);

    useEffect(() => {
        const hamburger = document.querySelector(`.hamburger`);
        hamburger?.classList.toggle(`hamburger-active`);
    }, [isMobileMenuOpened]);
    
    return (
        <>
            <header>
                <div className="container">
                    <Link to="/">
                        <Logo/>
                    </Link>
                    {isDesktop ? 
                        <>
                            <Navigation/>
                            <LangSwitcher/>
                        </>
                        :
                        <div 
                            className="hamburger" 
                            onClick={handleHamburgerClick}
                        >
                            <div className="hamburger__line"></div>
                            <div className="hamburger__line"></div>
                            <div className="hamburger__line"></div>
                        </div>
                    }
                </div>
            </header>
        </>

    )
};

export default Header;