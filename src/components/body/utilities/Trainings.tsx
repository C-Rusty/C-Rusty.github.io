import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../../styles/body/Trainings.scss';
import introImg from '../../../images/content/trainings/introImg.webp';
import resultBg from '../../../images/content/trainings/result.webp';

const Trainings = () => {

    const { t } = useTranslation();

    return(
        <div className="container-page">
            <section className="mba-trainings">
                <div className="mba-trainings__description">
                    <div className="container">
                        <div className="content">
                            <h2>
                                {t (`Course`)}
                                &laquo;{t (`Marketing in MBA format`)}&raquo;
                            </h2>
                            <p className="aim-text">
                                {t (`Aimed at improving the team’s management competencies in marketing and mastering modern marketing technologies`)}
                            </p>
                            <div className="info-col">
                                <p>
                                    {t (`Long-term`)},
                                    <span> 4-6 </span>
                                    {t (`months`)}
                                </p>
                                <p>{t (`Adapts to client needs`)}</p>
                                <p>
                                    <span>48-72</span>
                                    {t (`hours`)}
                                </p>
                                <p>Online/Offline</p>
                            </div>
                            <button>
                                <Link to="/contants">{t (`Contact me`)}</Link>
                            </button>
                        </div>
                        <div className="img-container">
                            <img src={introImg} alt="intro-img" />
                        </div>
                    </div>
                </div>
                <div className="mba-trainings__when-needed">
                    <div className="container">
                        <div className="card">
                            <p>{t (`It is needed when the company has the task of creating a personnel reserve or increasing management competencies and the performance of managers`)}</p>
                        </div>
                        <div className="card">
                            <p>{t (`Listeners can be either mid-level employees, heads of departments and businesses`)}</p>
                        </div>
                        <div className="card">
                            <p>{t (`It is often an integral part of a corporate MBA (as a rule, a corporate MBA includes courses on management,finance and marketing)`)}</p>
                        </div>
                    </div>
                </div>
                <div className="mba-trainings__clients">
                    <div className="container">
                        <div className="headline">
                            <h3>{t (`Relevant clients`)}</h3>
                            <h4>({t (`employees and managers who attended this course`)})</h4>
                        </div>
                        <div className="client-items">
                            <div className="client-items__item">
                                <h5>{t (`Automobile holding Atlant-M`)}</h5>
                                <span className="country">
                                    {t (`operates in 3 countries`)}
                                </span>
                            </div>
                            <div className="client-items__item">
                                <h5>{t (`Manufacturing company Alutech`)}</h5>
                                <span className="country">
                                    {t (`operates in more than 50 countries`)}
                                </span>
                            </div>
                            <div className="client-items__item">
                                <h5>{t (`Business school XXI century`)}</h5>
                                <span className="country">
                                    {t (`Open type MBA - for owners and top managers`)}
                                </span>
                            </div>
                            <div className="client-items__item">
                                <h5>
                                    {t (`DIY chain of stores`)} 
                                    <span> &laquo;OMA&raquo;</span>
                                </h5>
                                <span className="country">BY</span>
                            </div>
                            <div className="client-items__item">
                                <h5>
                                    {t (`Automobile holding`)} 
                                    <span> &laquo;Aster&raquo;</span>
                                </h5>
                                <span className="country">KZ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mba-trainings__result">
                    <div className="img-container">
                        <img src={resultBg} alt="result-bg" />
                    </div>
                    <div className="container">
                        <h3>{t (`Result`)}</h3>
                        <div className="in-detail">
                            <p>t {(`Employees will master modern and classical marketing management methodologies"`)}</p>
                            <p>t {(`Employees will learn to use marketing tools in practical activities as applied to their company`)}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Trainings;