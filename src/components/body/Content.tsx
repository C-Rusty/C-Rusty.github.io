import React from "react";
import AboutMe from "./utilities/AboutMe";
import Trainings from "./utilities/Trainings";
import ArticlesAndCases from "./utilities/ArticlesAndCases";
import Contacts from "./utilities/Contacts";
import { Route, Routes} from "react-router-dom";


const Content = () => {
    return(
        <Routes>
            <Route path="/" element={<AboutMe/>}/>
            <Route path="/trainings" element={<Trainings/>}/>
            <Route path="/articles-and-cases" element={<ArticlesAndCases/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    )
};

export default Content;