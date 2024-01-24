import React from "react";
import {useTranslation} from 'react-i18next';

const LangSwitcher = () => {
    const { i18n } = useTranslation();
    
    const handleLangSwitch = (e: { target: { value: string; }; }) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
    };

    return (
        <select value={i18n.language} onChange={handleLangSwitch}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
        </select>
    )
};

export default LangSwitcher;