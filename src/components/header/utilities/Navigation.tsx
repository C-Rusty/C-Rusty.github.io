import React from "react";
import { useTranslation } from "react-i18next";
import '../../../styles/head/header-utilities/NavBar.scss'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "store/store";

const Navigation = () => {

    const { t } = useTranslation();
    const deviceType: string = useSelector<IRootState, string>((state) => state.deviceType.screen);

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const currentActiveItem = document.querySelector(`.active`);
        currentActiveItem?.classList.remove(`active`);

        const navItemClicked = e.currentTarget;
        document.getElementById(`${navItemClicked.id}`)?.classList.add(`active`);

        document.querySelector('.mobile-menu')?.classList.toggle(`opened`);
        document.querySelector(`.hamburger`)?.classList.toggle(`hamburger-active`);
    };

    return (
        <nav className={`header-nav nav-${deviceType}`}>
            <ul>
                <li onClick={(e) => handleClick(e)} id="about-me" className="active">
                    <Link to="/">{t (`About me`)}</Link>
                </li>
                <li onClick={(e) => handleClick(e)} id="trainings">
                    <Link to="/trainings">{t (`Trainings`)}</Link>
                </li>
                <li onClick={(e) => handleClick(e)} id="articles-cases">
                    <Link to="/articles-and-cases">{t (`Articles & Case Studies`)}</Link>
                </li>
                <li onClick={(e) => handleClick(e)} id="contacts">
                    <Link to="/contacts">{t (`Contacts`)}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;