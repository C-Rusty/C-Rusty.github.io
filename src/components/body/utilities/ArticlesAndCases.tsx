import React, { useEffect, useState } from "react";
import '../../../styles/body/ArticlesCases.scss';
import { useTranslation } from "react-i18next";
import { api } from "../../../api/ApiPosts";
import { IPost } from "interface/Interface";
import PostItem from "./PostItem/PostItem";
import { apiImg } from "../../../api/ApiImg";

const ArticlesAndCases = () => {

    const { t } = useTranslation();
    const [posts, setPosts] = useState<IPost[] | []>([]);

    const getPosts = async () => {
        const posts: IPost[] | undefined = await api.getPosts();

        if (posts) {
            setPosts(posts)
        } else {
            throw new Error (`Something wrong with posts response. Posts API returned value ${posts}`);
        };
    };

    const handleClickBtn = () => {
        api.createCollection();
    };

    const handleUpload = (file: File) => {
        if (file) {
            apiImg.uploadImage(file);         
        };
    }

    useEffect(() => {
        getPosts();
    }, []);

    return(
        <div className="articles-cases">
            {/* <button onClick={handleClickBtn}>Create Post</button> */}
            <div className="container">
                <nav className="nav-bar">
                    <div className="nav-bar__types">
                        <span>{t (`Type`)}</span>
                        {/* <input type="file" name="" id=""
                            onChange={ (e) => handleUpload(e.target.files![0])}
                        /> */}
                        <ul className="list">
                            <li>{t (`All`)}</li>
                            <li>{t (`Articles`)}</li>
                            <li>{t (`Cases`)}</li>
                        </ul>
                    </div>
                    <div className="nav-bar__categories">
                        <span>{t (`Category`)}</span>
                        <ul className="list">
                            <li>{t (`All`)}</li>
                            <li>{t (`Маркетинг`)}</li>
                            <li>{t (`Разработка стратегии`)}</li>
                        </ul>
                    </div>
                </nav>
                <div className="articles-cases-container">
                    {posts.map(post => 
                        <PostItem key={post._id} post={post}/>    
                    )}
                </div>
            </div>
        </div>
    )
};

export default ArticlesAndCases;