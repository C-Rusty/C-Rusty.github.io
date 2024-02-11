import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../../../api/ApiPosts";
import { IPost } from "interface/Interface";
import { apiImg } from "../../../api/ApiImg";
import '../../../styles/main/articles-cases.scss';
import ShortPost from "./post/ShortPost";
import { useSelector } from "react-redux";
import FiltersBar from "./menu/FiltersBar";

const ArticlesAndCases = () => {

    const { t } = useTranslation();

    const [posts, setPosts] = useState<IPost[] | []>([]);
    const [pageLang, setPageLang] = useState<string>(document.documentElement.lang);

    const [initialPosts, setInitialPosts] = useState<IPost[] | []>([]);

    const getImg = async (imageCloudPath: string) => {
        return apiImg.downloadImage(imageCloudPath);
    };

    const getPosts = async (pageLang: string) => {
        const posts: IPost[] | undefined = await api.getPosts(pageLang);

        if (posts) {

            for (let post of posts) {
                const imgUrl = await getImg(post.imageCloudPath);
                post.imageUrl = imgUrl;
            };

            setPosts(posts);
            setInitialPosts(posts);
        } else {
            throw new Error (`Something wrong with posts API response. Posts API returned value ${posts}`);
        };
    };
    
    const categoryTag = useSelector((state) => state.categoryTag.value);
    const typeTag = useSelector((state) => state.typeTag.value);

    // const handleClickBtn = () => {
    //     api.createCollection(document.documentElement.lang);
    // };

    // const handleUpload = (file: File) => {
    //     if (file) {
    //         apiImg.uploadImage(file);         
    //     };
    // };

    const filterPosts = (typeTag: string, categoryTag : string) => {
        let filteredPosts: IPost[] = [];

        if (typeTag === `All` && categoryTag === `All`) {
            setPosts(initialPosts);
        } 
        else if (typeTag !== `All` && categoryTag !== `All`) {
            filteredPosts = initialPosts.filter((post) => 
                post.types.find(type => type === typeTag) && 
                post.categories.find(category => category === categoryTag)
            );
            setPosts(filteredPosts);
        } 
        else if ((typeTag !== `All` && categoryTag === `All`)) {
            filteredPosts = initialPosts.filter((post) => 
                post.types.find(type => type === typeTag)
            );
            setPosts(filteredPosts);
        }
        else if ((typeTag === `All` && categoryTag !== `All`)) {
            filteredPosts = initialPosts.filter((post) => 
                post.categories.find(category => category === categoryTag));
            setPosts(filteredPosts);
        } else {
            throw new Error(`Something wrong with the filtration`);
        };
    };

    useEffect(() => {
        setPageLang(document.documentElement.lang);
    }, [document.documentElement.lang]);

    useEffect(() => {
        getPosts(pageLang);
    }, [pageLang]);

    useEffect(() => {
        filterPosts(typeTag, categoryTag);
    }, [typeTag, categoryTag]);

    // const dispatch = useDispatch();
    // const mobile = useSelector((state) => state.mobile.value);

    // const setClose = () => {
    //     dispatch(close());
    // };

    // const setOpen = () => {
    //     dispatch(open());
    // };

    // <button onClick={() => setClose()}>Close</button>
    // <button onClick={() => setOpen()}>Open</button>
    // <div>{mobile ? `open` : `close`}</div>
    
    return(
        <div className="articles-cases">
            {/* <button onClick={handleClickBtn}>Create Post</button> */}
            <div className="container">
                {window.innerWidth <= 768 && 
                    <div className="filters">
                        <button className="filters__inner">
                            <img src="../../../images/content/articles-cases/filter-menu.svg" alt="filters" />
                            <span>{t (`Filters`)}</span>
                        </button>
                    </div>
                }
                <FiltersBar />
                <div className="articles-cases-container">
                    {posts.map(post => 
                        <ShortPost key={post._id} post={post}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArticlesAndCases;