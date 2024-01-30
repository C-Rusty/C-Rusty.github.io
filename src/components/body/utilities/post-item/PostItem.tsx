import { IPost } from "interface/Interface";
import React, { useEffect, useState } from "react";
import { apiImg }  from "../../../../api/ApiImg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PostItem = ({post} : {post: IPost}) => {

    const [img, setImg] = useState<string>(`no-img`);

    const getImg = async () => {
        const imgUrl = await apiImg.downloadImage(post.imageCloudPath);
        if (imgUrl) setImg(imgUrl);        
    };

    useEffect(() => {
        getImg();
    }, []);

    const { t } = useTranslation();

    const postUrlPath = post.imageCloudPath.split(`/`)[1].split(`.`)[0];

    const handleClick = () => {
        document.querySelector(`#${postUrlPath}`)!.click();
    };

    return (
        <div className="post" onClick={handleClick}>
            <div className="img">
                <img src={img} loading="lazy" alt={postUrlPath} />
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
            <Link id={postUrlPath} to={`/${post.imageCloudPath.split(`/`)[1].split(`.`)[0]}`}></Link>
        </div>
    );
};

export default PostItem;