import React, { useEffect, useState } from "react";
import AboutMe from "./utilities/AboutMe";
import Trainings from "./utilities/Trainings";
import ArticlesAndCases from "./utilities/ArticlesAndCases";
import Contacts from "./utilities/Contacts";
import { Route, Routes} from "react-router-dom";
import { api } from "../../api/ApiPosts";
import { IPost } from "../../interface/Interface";
import FullPost from "./utilities/post/FullPost";
import Legal from "../../components/footer/utilities/Legal";

const Content = () => {

    const [posts, setPosts] = useState<IPost[] | []>([]);

    const getPosts = async (pageLang: string) => {
        const posts: IPost[] | undefined = await api.getPosts(pageLang);

        if (posts) {
            setPosts(posts);
        } else {
            throw new Error (`Something wrong with posts API response. Posts API returned value ${posts}`);
        };
    };

    useEffect(() => {
        getPosts(document.documentElement.lang);
    }, []);

    return(
        <Routes>
            <Route path="/" element={<AboutMe/>}/>
            <Route path="/trainings" element={<Trainings/>}/>
            <Route path="/articles-and-cases" element={<ArticlesAndCases/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            {posts.map(post =>
                <Route path={`articles-and-cases/${post.imageCloudPath.split(`/`)[1].split(`.`)[0]}`} element={<FullPost/>}/>    
            )}
            <Route path="/legal" element={<Legal/>}/>
        </Routes>
    )
};

export default Content;