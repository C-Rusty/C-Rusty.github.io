import { IPost } from "../../../../interface/Interface";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PostItem = ({post} : {post: IPost}) => {

    const { t } = useTranslation();

    const postUrlPath = post.imageCloudPath.split(`/`)[1].split(`.`)[0];

    return (
        <Link to={`/articles-and-cases/${postUrlPath}`} className="post">
            <div className="img">
                <img src={post.imageUrl} loading="lazy" alt={postUrlPath} />
                <div className="img__read-hover">
                    <span>Читать</span>
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

export default PostItem;