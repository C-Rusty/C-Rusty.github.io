import React from "react";
import { useTranslation } from "react-i18next";
import '../../../../styles/main/FullPost/FullPostItem.scss';
import { Link } from "react-router-dom";
import ArrowBack from "../../../../images/content/articles-cases/ArrowBack";

const FullPost = () => {

    const { t } = useTranslation();

    return (
        <div className="post">
            <div className="container">
                <div className="header-post">
                    <div className="back">
                        <Link to={`/articles-and-cases`}>
                            <ArrowBack/>
                            {t (`Back to list`)}
                        </Link>
                    </div>
                    <div className="tags">
                        <span>{t (`Cases`)}</span>
                        <span>{t (`Marketing`)}</span>
                        <span>{t (`Strategy development`)}</span>
                    </div>
                    <div className="empty"></div>
                </div>
                <div className="container">
                    <div className="main">
                        <h1>
                            {t (`Development of a marketing strategy for`)} KIA Motors
                        </h1>
                        <h2>
                            {t (`How the joint work of consultants and the customer’s team helped the dealer achieve a leading position in the Belarusian market`)}
                        </h2>
                        <div className="img-container">
                            <img src="../../../../images/content/articles-cases/marketing-strategy.webp" alt="marketing-strategy" />
                            <p>{t (`Photo - company group on`)} Facebook.</p>
                        </div>
                        <div className="article">
                            <h3>
                                {t (`Task`)}
                            </h3>
                            <p>
                                {t (`The dealer planned a sharp breakthrough in sales and coverage of a large share of the car market. The team actively discussed what to bet on, how to build a marketing policy and set priorities. An external consultant, Oleg Chanov, was hired to work on the project. The main task is to increase market share`)}
                            </p>
                        </div>
                        <div className="article">
                            <h3>
                                {t (`Solution`)}
                            </h3>
                            <div className="elements-with-text">
                                <p>{t (`At the start of the project, the client and I outlined our long-term goals`)}</p>
                                <ul>
                                    <li>{t (`development of a marketing strategy in all areas (car sales, service and maintenance)`)}</li>
                                    <li>{t (`constant support`)}</li>
                                </ul>
                                <p >
                                    <div className="line"></div>
                                    <p>
                                        {t (`A ready-made strategy is not a magic pill that will give results tomorrow. For everything to work, the implementation of strategic tasks must be monitored (provided support)`)}
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="article">
                            <h3>
                                {t (`Stage`)} 1. {t (`Development of a marketing strategy for a car dealership`)}
                            </h3>
                            <p>
                                {t (`The promotion strategy depends on the market capacity and competitiveness of the product. To begin with, we collected information and analyzed the Belarusian car market, the needs and wishes of customers, and compared the client’s marketing with the marketing of competitors. This research helped form a marketing foundation and structure, which subsequently influenced the increase in KIA's market share through promotion, positioning and competent development of the dealer network.`)}
                            </p>
                        </div>
                        <div className="article">
                            <h3>
                                {t (`Stage`)} 2. {t (`Reorganization of the marketing department`)}
                            </h3>
                            <div className="elements-with-text">
                                <p >
                                    {t (`For effective work and distribution of responsibilities between participants, we reorganized the marketing department`)}:
                                </p>
                                <ul>
                                    <li>
                                        {t (`conducted testing among employees`)}
                                    </li>
                                    <li>
                                        {t (`redistributed functional responsibilities according to new goals and objectives`)}
                                    </li>
                                    <li>
                                        {t (`together with a new PR manager, we developed a PR concept for KIA`)}
                                    </li>
                                    <li>
                                        {t (`made up an annual action plan to implement strategic objectives for each employee`)}
                                    </li>
                                </ul>
                                <p >
                                    {t (`Duration of stages 1 and 2: one year`)}
                                </p>
                            </div>
                        </div>
                        <div className="article">
                            <h3>
                                {t (`Stage`)} 3. {t (`Conducting a strategic session`)}
                            </h3>
                            <div className="elements-with-text">
                                <p >
                                    {t (`The strategic session helped TOP service and maintenance managers identify goals and objectives for the development of their areas. The session was attended by`)}
                                </p>
                                <ul>
                                    <li>{t (`financial director`)}</li>
                                    <li>{t (`deputy Director for External Relations`)}</li>
                                    <li>{t (`deputy Director for Logistics`)}</li>
                                    <li>{t (`head of the Marketing Department`)}</li>
                                    <li>{t (`heads of car sales departments`)}</li>
                                </ul>
                                <p >
                                    {t (`Duration of stage`)}: 2 {t (`days`)}.
                                </p>
                            </div>

                            <div className="img-container img-container-2">
                                <img src="../../../../images/content/articles-cases/kia-marketing.webp" alt="marketing-strategy" />
                                <p >
                                    {t (`Sergey Fedorenko, director of Atlant-M`)}
                                    (KIA).
                                    {t (`Photo`)} - atlantm.com
                                </p>
                            </div>
                        </div>
                        <div className="article">
                            <h3>{t (`Stage`)} 4. {t (`Conducting a strategic session`)}</h3>
                            <div className="elements-with-text">
                                <p>
                                    {t (`After three phases of the project, KIA sales increased and the team planned for further growth. They constantly held sessions to optimize the strategy: they set new goals and growth indicators, updated data on the market and competitors`)}
                                </p>
                                <p>
                                    <div className="line"></div>
                                    <p>
                                        {t (`A ready-made strategy is not a magic pill that will give results tomorrow. For everything to work, the implementation of strategic tasks must be monitored (provided support)`)}
                                    </p>
                                </p>
                                <p>
                                    {t (`As a project consultant, I accompanied the implementation of a marketing strategy and helped carry out an advertising campaign. Throughout the project, I conducted marketing research of the target audience for KIA, drew portraits of real customers, and selected new priority customer segments for promotion`)}
                                </p>
                                <p >
                                    {t (`Duration of stage`)}: 2 {t (`yearsRu`)}.
                                </p>
                            </div>
                        </div>
                        <div className="article">
                            <h3>{t (`Result`)}</h3>
                            <div className="elements-with-text">
                                <ul>
                                    <li>
                                        {t (`Over three years of joint work, KIA's market share increased from 3% to 11%`)}
                                    </li>
                                    <li>
                                        {t (`Out of 20 car dealers in the Republic of Belarus, the KIA auto center took 7th place`)}
                                    </li>
                                    <li>
                                        {t (`Due to the increase in sales volume, the team became not just dealers, but importers of KIA cars in the Republic of Belarus`)}
                                    </li>
                                </ul>
                                <p>
                                    {t (`Sergey Fedorenko, director of Atlant-M (KIA), customer of the project: Oleg has extensive work experience, and this for me meant trust in the solutions being developed. It is pleasant and easy to work with him, he is ready for tasks of any level. As a result of the project, we recorded excellent results, thank you for your cooperation`)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FullPost;