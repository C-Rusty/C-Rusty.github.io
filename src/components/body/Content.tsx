import React, { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import { api } from "../../api/ApiPosts";

const Content = () => {
    
    const AboutMe = React.lazy(() => import('./utilities/AboutMe'));
    const Trainings = React.lazy(() => import('./utilities/Trainings'));
    const ArticlesAndCases = React.lazy(() => import('./utilities/ArticlesAndCases'));
    const Contacts = React.lazy(() => import('./utilities/Contacts'));
    const FullPost = React.lazy(() => import('./utilities/post/FullPost'));
    const NoPage = React.lazy(() => import('./utilities/NoPage'));
    
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
            <Route path="*" element={<NoPage/>} />
        </Routes>
    )
};

export default Content;