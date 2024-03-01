import React from "react";
import '../../../styles/main/no-page.scss';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NoPage = () => {

    const ArrowBack = React.lazy(() => import('../../../images/content/articles-cases/ArrowBack'));

    const { t } = useTranslation();

    return(
        <div className="no-page">
            <div className="container">
                <div className="error">z
                    <p className="error__text">{t (`Uh-oh. Sorry, but there's no such page.`)}</p>
                    <Link to="/" className="error__link">
                        <ArrowBack/>
                        <p>{t (`Return`)}</p>
                    </Link>
                </div>
                <div className="img">
                    <img loading="lazy" src="../../../images\content\no-page\404.webp" alt="404-error" />
                </div>
            </div>
        </div>
    );
};

export default NoPage;