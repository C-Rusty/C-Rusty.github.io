import React  from "react";
import '../../../../styles/main/MobileMenu.scss';

const MobileMenu = () => {

    const NavBar = React.lazy(() => import('../Navigation'));
    const LangSwitcher = React.lazy(() => import('../LangSwitcher'));

    return (
        <>
            <NavBar/>
            <LangSwitcher/>
        </>
    );
};

export default MobileMenu;