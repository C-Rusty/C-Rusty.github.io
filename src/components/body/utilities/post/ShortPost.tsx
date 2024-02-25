import { IPost } from "../../../../interface/Interface";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ShortPost = ({post} : {post: IPost}) => {

    const { t } = useTranslation();

    const postUrlPath = post.imageCloudPath.split(`/`)[1].split(`.`)[0];

    return (
        <Link to={postUrlPath} className="post">
            <div className="post__img">
                <img src={post.imageUrl} loading="lazy" alt={postUrlPath} />
                <div className="img__read-hover">
                    <span>{t (`Read`)}</span>
                </div>
            </div>
            <div className="post__info">
                <h2>{post.headline}</h2>
                <div className="categories">
                    {post.categories.map(category => 
                        <h3 key={category}>{t (`${category}`)}
                        </h3>    
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ShortPost;