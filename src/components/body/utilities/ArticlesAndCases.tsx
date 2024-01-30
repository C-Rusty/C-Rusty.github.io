import React, { useEffect, useState, Suspense} from "react";
import { useTranslation } from "react-i18next";
import { api } from "../../../api/ApiPosts";
import { IPost } from "interface/Interface";
import { apiImg } from "../../../api/ApiImg";
import Loading from "./Loading";
import '../../../styles/body/articles-cases.scss';

const ArticlesAndCases = () => {

    const { t } = useTranslation();

    const [posts, setPosts] = useState<IPost[] | []>([]);
    const [img, setImg] = useState<string>(`no-img`);
    const [pageLang, setPageLang] = useState<string>(`ru`);

    const [initialPosts, setInitialPosts] = useState<IPost[] | []>([]);

    const [typesTagsSelected, setTypesTagsSelected] = useState<string>(`All`);
    const [categoryTagsSelected, setCategoryTagsSelected] = useState<string>(`All`);

    const PostItemsContainer = React.lazy(() => import('./post-item/PostItemsContainer'));

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

    // const handleClickBtn = () => {
    //     api.createCollection(document.documentElement.lang);
    // };

    // const handleUpload = (file: File) => {
    //     if (file) {
    //         apiImg.uploadImage(file);         
    //     };
    // };

    const filterPosts = (typesTagsSelected: string, categoryTagsSelected : string) => {
        let filteredPosts: IPost[] = [];

        if (typesTagsSelected === `All` && categoryTagsSelected === `All`) {
            setPosts(initialPosts);
        } 
        else if (typesTagsSelected !== `All` && categoryTagsSelected !== `All`) {
            filteredPosts = initialPosts.filter(post => post.types.find(type => type === typesTagsSelected) && post.categories.find(category => category === categoryTagsSelected));
            setPosts(filteredPosts);
        } 
        else if ((typesTagsSelected !== `All` && categoryTagsSelected === `All`)) {
            filteredPosts = initialPosts.filter(post => post.types.find(type => type === typesTagsSelected));
            setPosts(filteredPosts);
        }
        else if ((typesTagsSelected === `All` && categoryTagsSelected !== `All`)) {
            filteredPosts = initialPosts.filter(post => post.categories.find(category => category === categoryTagsSelected));
            setPosts(filteredPosts);
        } else {
            throw new Error(`Somtheing wrong with the filtration`);
        }
    };

    const handleClickTag = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {

        if (e.currentTarget.parentElement?.classList.contains(`types-list`)) {
            const currentActiveTypeTag = document.querySelector(`.active-type-tag`);

            currentActiveTypeTag?.classList.remove(`active-type-tag`);
            const navItemClicked = e.currentTarget;

            document.getElementById(`${navItemClicked.id}`)!.classList.add(`active-type-tag`);

        } else if (e.currentTarget.parentElement?.classList.contains(`categories-list`)) {
            const currentActiveCategoryTag = document.querySelector(`.active-category-tag`);
            currentActiveCategoryTag?.classList.remove(`active-category-tag`);
            const navItemClicked = e.currentTarget;

            document.getElementById(`${navItemClicked.id}`)?.classList.add(`active-category-tag`);
        };
    };

    useEffect(() => {
        setPageLang(document.documentElement.lang);
    }, [document.documentElement.lang]);

    useEffect(() => {
        getPosts(pageLang);
    }, [pageLang]);

    useEffect(() => {
        filterPosts(typesTagsSelected, categoryTagsSelected);
    }, [typesTagsSelected, categoryTagsSelected]);

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
                        <ul className="list types-list">
                            <li
                                onClick={(e) => {
                                    setTypesTagsSelected(`All`);
                                    handleClickTag(e)
                                }}
                                id="all-types"
                                className="active-type-tag"
                            >{t (`All`)}</li>
                            <li
                                onClick={(e) => {
                                    setTypesTagsSelected(`Articles`);
                                    handleClickTag(e)
                                }}
                                id="articles"
                            >{t (`Articles`)}</li>
                            <li
                                onClick={(e) => {
                                    setTypesTagsSelected(`Cases`);
                                    handleClickTag(e)
                                }}
                                id="cases"
                            >{t (`Cases`)}</li>
                        </ul>
                    </div>
                    <div className="nav-bar__categories">
                        <span>{t (`Category`)}</span>
                        <ul className="list categories-list">
                            <li
                                onClick={(e) => {
                                    setCategoryTagsSelected(`All`);
                                    handleClickTag(e)
                                }}
                                id="all-categories"
                                className="active-category-tag"
                            >{t (`All`)}</li>
                            <li
                                onClick={(e) => {
                                    setCategoryTagsSelected(`Marketing`);
                                    handleClickTag(e)
                                }}
                                id="marketing"
                            >{t (`Marketing`)}</li>
                            <li
                                onClick={(e) => {
                                    setCategoryTagsSelected(`Strategy`);
                                    handleClickTag(e)
                                }}
                                id="strategy"
                            >{t (`Strategy development`)}</li>
                        </ul>
                    </div>
                </nav>
                <Suspense fallback={<Loading/>}>
                    <PostItemsContainer posts={posts}/>
                </Suspense>
            </div>
        </div>
    );
};

export default ArticlesAndCases;