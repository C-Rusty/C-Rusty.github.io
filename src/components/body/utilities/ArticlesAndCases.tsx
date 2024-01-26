import React from "react";
import '../../../styles/body/ArticlesCases.scss';
import { useTranslation } from "react-i18next";

const ArticlesAndCases = () => {

    const { t } = useTranslation();

    return(
        <div className="articles-cases">
            <div className="container">
                <nav className="nav-bar">
                    <div className="nav-bar__types">
                        <span>{t (`Type`)}</span>
                        <ul >
                            <li>{t (`All`)}</li>
                            <li>{t (`Articles`)}</li>
                            <li>{t (`Cases`)}</li>
                        </ul>
                    </div>
                    <div className="nav-bar__categories">
                        <span>{t (`Categories`)}</span>
                        <ul >
                            <li>{t (`All`)}</li>
                            <li>{t (`Маркетинг`)}</li>
                            <li>{t (`Разработка стратегии`)}</li>
                        </ul>
                    </div>
                </nav>
                <div className="articles-cases-container">
                    
                </div>
            </div>
        </div>
    )
};

export default ArticlesAndCases;