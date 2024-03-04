import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/head/header.scss';
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const Header = () => {

    const Logo = React.lazy(() => import('./utilities/Logo'));
    const Navigation = React.lazy(() => import('./utilities/Navigation'));
    const LangSwitcher = React.lazy(() => import('./utilities/LangSwitcher'));
    const MobileHamburger = React.lazy(() => import('./utilities/MobileHamburger'));
    const MobileMenuContainer = React.lazy(() => import('./utilities/mobile-menu/MobileMenuContainer'));

    const screen: string = useSelector<IRootState, string>((state) => state.deviceType.screen);

    const handleScroll = (elTopOffset: number, elHeight: number, header: Element | null) => {
        if (window.scrollY > (elTopOffset + elHeight)) {
            header?.classList.add(`sticky`);
        } else if (window.scrollY === 0) {
            header?.classList.remove(`sticky`);
        };
    };
  
    useEffect(() => {
      const header = document.querySelector(`.header`);
      const headerPosition = header?.getBoundingClientRect();
      const handleScrollEvent = () => {
        handleScroll(headerPosition!.top, headerPosition!.height, header);
      };
  
      window.addEventListener('scroll', handleScrollEvent);
    }, []);

    return (
        <>
            <header className="header">
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