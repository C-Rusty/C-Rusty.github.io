import React from "react";
import Logo from "./utilities/Logo";
import Navigation from "./utilities/Navigation";
import LangSwitcher from "./utilities/LangSwitcher";
import { Link } from "react-router-dom";
import '../../styles/head/header.scss';
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import MobileHamburger from "./utilities/MobileHamburger";

const Header = () => {

    const screenType: string = useSelector<IRootState, string>((state) => state.deviceType.screenType);

    return (
        <>
            <header>
                <div className="container">
                    <Link to="/">
                        <Logo/>
                    </Link>
                    {screenType === `desktop` ? 
                        <>
                            <Navigation/>
                            <LangSwitcher/>
                        </>
                        :
                        <MobileHamburger/>
                    }
                </div>
            </header>
        </>

    )
};

export default Header;