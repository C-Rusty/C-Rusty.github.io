import React from "react";
import { useTranslation } from "react-i18next";
import '../../../styles/Header/header-utilities/NavBar.scss'
import { Link } from "react-router-dom";

const NavBar = () => {

    const { t } = useTranslation();

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const currentActiveItem = document.querySelector(`.active`);
        currentActiveItem?.classList.remove(`active`);

        const navItemClicked = e.currentTarget;
        document.getElementById(`${navItemClicked.id}`)?.classList.add(`active`);
    };

    return (
        <nav className="header-nav">
            <ul>
                <li onClick={(e) => handleClick(e)} id="about-me">
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

export default NavBar;