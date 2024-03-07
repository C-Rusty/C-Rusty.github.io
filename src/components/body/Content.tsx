import React from "react";
import { Route, Routes} from "react-router-dom";
import Loading from "./utilities/Loading";

const Content = () => {
    
    const AboutMe = React.lazy(() => import('./utilities/AboutMe'));
    const Trainings = React.lazy(() => import('./utilities/Trainings'));
    const Contacts = React.lazy(() => import('./utilities/Contacts'));
    const NoPage = React.lazy(() => import('./utilities/404'));
    
    return(
        <React.Suspense fallback={<Loading/>}>
            <Routes>
                <Route path="/" element={<AboutMe/>}/>
                <Route path="trainings" element={<Trainings/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </React.Suspense>
    );
};

export default Content;