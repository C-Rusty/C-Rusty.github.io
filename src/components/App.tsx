import React from "react";
import i18n from "i18next";
import { initReactI18next} from 'react-i18next';
import LangEn from '../locales/en.json';
import LangRu from '../locales/ru.json';
import '../styles/App.scss';
import i18next from "i18next";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

const resources  = {
    en: {
        translation: LangEn
    },
    ru: {
        translation: LangRu
    }
};

const browserLang = navigator.language.split(`-`)[0];

i18n.use(initReactI18next).init({
    resources,
    lng: browserLang,
    fallbackLng: `en`,
    interpolation: {
        escapeValue: false
    }
});

i18next.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
});

const Header = React.lazy(() => import('./header/Header'));
const Content = React.lazy(() => import('./body/Content'));
const LegalDocsModal = React.lazy(() => import('./footer/utilities/Legal'));
const Footer = React.lazy(() => import('./footer/Footer'));

const App = () => {
    
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <Content/>
                <LegalDocsModal/>
                <Footer/>
            </Provider>
        </BrowserRouter>
    );
};

export default App;