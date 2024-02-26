import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../../../../styles/main/PostItem/FullPost.scss';
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
        <div className="post-full">
            <div className="container">
                <div className="head">
                    <div className="head__back-btn">
                        <Link to="/articles-and-cases">
                            <ArrowBack/>
                            {t (`Back to list`)}
                        </Link>
                    </div>
                    <div className="head__tags">
                        {postContent?.categories.map(category => 
                            <span>{t (`${category}`)}</span>
                        )}
                        {postContent?.types.map(type => 
                            <span>{t (`${type}`)}</span>
                        )}
                    </div>
                    <div className="head__empty"></div>
                </div>
                <div className="container">
                    {postContent?.htmlContent.map(post => 
                        <>{parse(post)}</>
                    )}
                </div>
            </div>
        </div>
    )
};

export default FullPost;