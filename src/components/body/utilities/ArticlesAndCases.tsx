import React, { useEffect, useState } from "react";
import { api } from "../../../api/ApiPosts";
import { IPost } from "interface/Interface";
import { apiImg } from "../../../api/ApiImg";
import '../../../styles/main/articles-cases.scss';
import ShortPost from "./post/ShortPost";
import { useSelector } from "react-redux";
import FiltersBar from "./menu/FiltersBar";
import { IRootState } from "store/store";
import MobileFilterBtn from "./filtersMobile/MobileFilterBtn";

const ArticlesAndCases = () => {

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
    
    const categoryTag = useSelector<IRootState, string>((state) => state.categoryTag.chosen);
    const typeTag = useSelector<IRootState, string>((state) => state.typeTag.chosen);

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

    return(
        <div className="articles-cases">
            {/* <button onClick={handleClickBtn}>Create Post</button> */}
            <div className="container">
                {window.innerWidth <= 768 ? 
                    <MobileFilterBtn/>
                    : 
                    <FiltersBar />
                }
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