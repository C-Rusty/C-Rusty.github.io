import React from "react";
import Logo from "./utilities/Logo";
import Navigation from "./utilities/Navigation";
import LangSwitcher from "./utilities/LangSwitcher";
import { Link } from "react-router-dom";
import '../../styles/head/header.scss';
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import MobileHamburger from "./utilities/MobileHamburger";
import MobileMenuContainer from "../../components/body/utilities/menu/MobileMenuContainer";

const Header = () => {

    const screen: string = useSelector<IRootState, string>((state) => state.deviceType.screen);

    return (
        <>
            <header>
                <div className="container">
                    <Link to="/">
                        <Logo/>
                    </Link>
                    {screen === `desktop` ? 
                        <>
                            <Navigation/>
                            <LangSwitcher/>
                        </>
                        :
                        <MobileHamburger/>
                    }
                </div>
            </header>
            {screen === `mobile` && <MobileMenuContainer/>}
        </>

    )
};

export default Header;