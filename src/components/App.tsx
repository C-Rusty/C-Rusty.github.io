import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { initReactI18next} from 'react-i18next';
import LangEn from '../locales/en.json';
import LangRu from '../locales/ru.json';
import LangSwitcher from "./LangSwitcher";
import './App.scss';
import TextComp from "./TextComp";

const resources  = {
    en: {
        translation: LangEn
    },
    ru: {
        translation: LangRu
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: `en`,
    fallbackLng: `en`,
    interpolation: {
        escapeValue: false
    }
});

const App = () => {
    const { t } = useTranslation();
    
    return (
        <div id="root">
            <LangSwitcher/>
            <h1>Hi</h1>
            <h2>{t (`Welcome to the website`)}</h2>
            <TextComp/>
        </div>    
    );
};

export default App;