import React, { useEffect, useState } from "react";
import AboutMe from "./utilities/AboutMe";
import Trainings from "./utilities/Trainings";
import ArticlesAndCases from "./utilities/ArticlesAndCases";
import Contacts from "./utilities/Contacts";
import { Route, Routes} from "react-router-dom";
import { api } from "../../api/ApiPosts";
import FullPost from "./utilities/post/FullPost";

const Content = () => {

    const [postsRouteNames, setPostsRouteNames] = useState<Array<string> | []>([]);

    const getPostsRoutes = async () => {
        const response = await api.getPostsUrl();
        
        if (response) {
            setPostsRouteNames(response);
        } else {
            throw new Error (`Something wrong with posts API response. Posts API returned value ${response}`);
        };
    };

    useEffect(() => {
        getPostsRoutes();
    }, []);

    return(
        <Routes>
            <Route path="/" element={<AboutMe/>}/>
            <Route path="trainings" element={<Trainings/>}/>
            <Route path="articles-and-cases" element={<ArticlesAndCases/>}>
                {postsRouteNames.map(pathName =>
                    <Route path={pathName} element={<FullPost/>} key={pathName} />   
                )}
            </Route>
            <Route path="contacts" element={<Contacts/>}/>
        </Routes>
    )
};

export default Content;