import React from "react";
import { useTranslation } from "react-i18next";
import photo from '../../../images/about-me/oleg-chanov.webp';
import educationSvg from '../../../images/about-me/education.svg';
import quoteBg from '../../../images/about-me/quote-bg.webp'
import approachBg from '../../../images/about-me/approach.webp';
import { Link } from "react-router-dom";
import '../../../styles/Body/AboutMe.scss';

const AboutMe = () => {

    const { t } = useTranslation();

    return(
        <>
            <section className="intro">
                <div className="container">
                    <div className="img">
                        <img src={photo} alt="oleg-chanov" />
                    </div>
                    <div className="text">
                        <div className="text__headline">
                            <h1>{t (`Aleg Chanov`)}</h1>
                            <div className="underline"></div>
                        </div>
                        <h2>{t (`Strategic management consultant`)}</h2>
                        <h3>{t ('Strategy development in offline and online sessions. Holding strategic sessions using AI (Artificial Intelligence)')}</h3>
                        <button>
                            <Link to="/contants">{t (`Contact me`)}</Link>
                        </button>
                    </div>
                </div>
            </section>
            <section className="digits">
                <div className="container">
                    <h3 className="headline">{t (`In numbers`)}</h3>
                    <div className="cards">
                        <div className="cards__card">
                            <h4>{t (`Since 2005`)}</h4>
                            <p>{t (`in consulting business`)}</p>
                        </div>
                        <div className="cards__card">
                            <h4>11 {t (`years`)}</h4>
                            <p>{t (`in a large automobile holding Volkswagen from an employee to a marketing director`)}</p>
                        </div>
                        <div className="cards__card">
                            <h4>&gt; 100</h4>
                            <p>{t (`of strategies and marketing strategies in various sectors of an economy: road construction, retail, banking, car business, light manufacturing, car engineering, industrial sector etc`)}</p>
                        </div>
                        <div className="cards__card">
                            <h4>&gt; 70</h4>
                            <p>{t (`strategic sessions held`)}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="education">
                <div className="container">
                    <h3>{t (`Education`)}</h3>
                    <div className="text">
                        <div className="svg">
                            <img src={educationSvg} alt="education" />
                        </div>
                        <div className="main">
                            <span>{t (`Europa-Universität Viadrina Frankfurt`)}</span>
                            <span>MBA</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="quote">
                <div className="img">
                    <img src={quoteBg} alt="" />
                </div>
                <div className="container">
                    <h4>{t (`The best way to predict the future is to create it...`)}</h4>
                    <h5>{t (`Peter Drucker`)}</h5>
                </div>
            </section>
            <section className="system">
                <div className="container">
                    <h3>&laquo;{t ("It's better to have any system than no system at all")}&raquo;</h3>
                    <div className="quotes">
                        <p>{t ('I believe that ideas move the world. If you look around, you can easily see this')}</p>
                        <p>{t ('I love and know how to help companies and owners build healthy, successful businesses and do something useful for people')}</p>
                        <p>
                            <span>
                                {t ('If you have an idea to build a large successful business, then, in addition to the vision of what it should be, the energy, dedication and good business model necessary for this, you need')}
                            </span>
                            <span className="highlight">
                                {t ('a system for moving')}
                            </span>
                            <span>
                                {t ('towards your goals and dreams')}
                            </span>
                        </p>
                        <p>
                            <span>
                                {t ('My job is to help the company create a strategy and strategic management system')}
                            </span>
                            <br />
                            <span>
                                {t ('I structure my work in such a way as to take into account the nuances of the company, the specifics of the business and relationships in the team. After all, there are no identical people and identical companies')}
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="approach">
                <div className="container">
                    <h3>{t ('Approach')}</h3>
                    <div className="main">
                        <div className="main__plan">
                            <div className="item">
                                <span>1</span>
                                <p>{t (`First, it is determined what competencies the company has and what experience it has in strategic planning and management`)}</p>
                            </div>
                            <div className="item">
                                <span>2</span>
                                <p>{t ('An introduction to the company and diagnostics are carried out')}</p>
                            </div>
                            <div className="item">
                                <span>3</span>
                                <p>{t ('Depending on the team’s competencies, it is determined and the strategy development format most suitable for the company is selected')}</p>
                            </div>
                            <div className="item">
                                <span>4</span>
                                <p>{t ('If necessary, the team is trained at the stage of preparation for developing a strategy')}</p>
                            </div>
                            <div className="item">
                                <span>5</span>
                                <p>{t ('A work scenario is created during the strategic session and after it in order for the strategy to be implemented')}</p>
                            </div>
                            <div className="item">
                                <span>6</span>
                                <p>{t ('A strategy is being developed')}</p>
                            </div>
                            <div className="item">
                                <span>7</span>
                                <p>{t ('The strategy is being successfully implemented')}</p>
                            </div>
                        </div>
                        <img src={approachBg} alt="my-approach" />
                    </div>
                </div>
            </section>
        </>
    )
};

export default AboutMe;