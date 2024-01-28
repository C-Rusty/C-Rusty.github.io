import { IPost } from "interface/Interface";
import React, { useEffect, useState } from "react";
import { apiImg }  from "../../../../api/ApiImg";

const PostItem = ({post} : {post: IPost}) => {

    const [img, setImg] = useState<string>(`no-img`);

    const getImg = async () => {
        const imgUrl = await apiImg.downloadImage(post.imageCloudPath);
        if (imgUrl) setImg(imgUrl);
    };

    useEffect(() => {
        getImg();
    }, []);

    return (
        <div className="post">
            <div className="img">
                <img src={img} alt={post.imageCloudPath} />
                <div className="img__read-hover">
                    <span>Читать</span>
                </div>
            </div>
            <div className="post__info">
                <h2>{post.headline}</h2>
                <div className="categories">
                    {post.categories.map(category => 
                        <h3 key={category}>{category}</h3>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostItem;