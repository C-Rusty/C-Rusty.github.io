import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../../../styles/head/header-utilities/NavBar.scss'
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "store/store";

const Navigation = () => {

    const { t } = useTranslation();
    const deviceType: string = useSelector<IRootState, string>((state) => state.deviceType.screen);

    const handleClick = () => {
        document.querySelector('.mobile-menu')?.classList.toggle(`opened`);
        document.querySelector(`.hamburger`)?.classList.toggle(`hamburger-active`);

        document.body.style.overflowY = `auto`;
    };

    const removeClassFromActiveItem = () => {
        const currentActiveItem = document.querySelector(`.active`);
        currentActiveItem?.classList.remove(`active`);
    };

    const currentUrlPath = useLocation(); 

    const handlePathChange = () => {
        removeClassFromActiveItem();

        let path: string = currentUrlPath.pathname.split(`/`)[1];
        if (path.length === 0) path = `about-me`;

        switch (path) {
            case `about-me`:
                document.getElementById(`about-me`)?.classList.add(`active`);
            break;
            case `trainings`:
                document.getElementById(`trainings`)?.classList.add(`active`);
            break;
            case `articles-and-cases`:
                document.getElementById(`articles-cases`)!.classList.add(`active`);
            break;
            case `contacts`:
                document.getElementById(`contacts`)?.classList.add(`active`);
            break;

            default: break;
        };
    };

    useEffect(() => {
        handlePathChange();
    }, [currentUrlPath]);

    useEffect(() => {
        handlePathChange();
    }, [window.onload]);
    

    return (
        <nav className={`header-nav nav-${deviceType}`}>
            <ul>
                <li onClick={() => {
                        if (deviceType === `mobile`) handleClick();
                    }} 
                    id="about-me"
                >
                    <Link to="/">{t (`About me`)}</Link>
                </li>
                <li onClick={() => { 
                        if (deviceType === `mobile`) handleClick();
                    }} 
                    id="trainings"
                >
                    <Link to="/trainings">{t (`Trainings`)}</Link>
                </li>
                <li onClick={() => { 
                        if (deviceType === `mobile`) handleClick();
                    }} 
                    id="articles-cases"
                >
                    <Link to="/articles-and-cases">{t (`Articles & Case Studies`)}</Link>
                </li>
                <li onClick={() => { 
                        if (deviceType === `mobile`) handleClick();
                    }} 
                    id="contacts"
                >
                    <Link to="/contacts">{t (`Contacts`)}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;