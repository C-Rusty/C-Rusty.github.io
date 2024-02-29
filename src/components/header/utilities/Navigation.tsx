import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../../../styles/head/header-utilities/NavBar.scss'
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "store/store";
import { useDispatch } from "react-redux";
import { setMobileState } from "../../../store/MenuOpenReducer";

const Navigation = () => {

    const { t } = useTranslation();
    const deviceType: string = useSelector<IRootState, string>((state) => state.deviceType.screen);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setMobileState(false));
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

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: `smooth`});
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
                        scrollToTop();
                    }} 
                    id="about-me"
                >
                    <Link to="/">{t (`About me`)}</Link>
                </li>
                <li onClick={() => { 
                        if (deviceType === `mobile`) handleClick();
                        scrollToTop();
                    }} 
                    id="trainings"
                >
                    <Link to="/trainings">{t (`Trainings`)}</Link>
                </li>
                <li onClick={() => { 
                        if (deviceType === `mobile`) handleClick();
                        scrollToTop();
                    }} 
                    id="articles-cases"
                >
                    <Link to="/articles-and-cases">{t (`Articles & Case Studies`)}</Link>
                </li>
                <li onClick={() => { 
                        if (deviceType === `mobile`) handleClick();
                        scrollToTop();
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