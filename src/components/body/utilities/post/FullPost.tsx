import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../../../../styles/main/FullPost/FullPostItem.scss';
import { Link } from "react-router-dom";
import ArrowBack from "../../../../images/content/articles-cases/ArrowBack";
import { api } from "../../../../api/ApiPosts";
import { IFullPost } from "interface/Interface";
import parse from 'html-react-parser';

const FullPost = () => {

    const { t } = useTranslation();

    const getPostContent = async () => {
        const response: IFullPost | undefined = await api.getFullPost(`ru`, `kia-strategy`);
        if (response) setPostContent(response);
    };

    const [postContent, setPostContent] = useState<IFullPost | undefined>(undefined);

    useEffect(() => {
        getPostContent();
    }, []);

    return (
        <div className="post">
            <div className="container">
                <div className="head">
                    <div className="back">
                        <Link to="/articles-and-cases">
                            <ArrowBack/>
                            {t (`Back to list`)}
                        </Link>
                    </div>
                    <div className="tags">
                        {postContent?.categories.map(category => 
                            <span>{t (`${category}`)}</span>
                        )}
                        {postContent?.types.map(type => 
                            <span>{t (`${type}`)}</span>
                        )}
                    </div>
                    <div className="empty"></div>
                </div>
                <div className="container">
                    {postContent?.htmlContent.map(htmlElement => 
                        <>{parse(htmlElement)}</>
                    )}
                </div>
            </div>
        </div>
    )
};

export default FullPost;