import React, { useEffect, useState } from "react";
import {useTranslation} from 'react-i18next';
import LangIcon from "./LangIcon";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../../../styles/Header/header-utilities/LangSwitcher.scss';
import { FormControl} from "@mui/material";

const LangSwitcher = () => {
    const { i18n } = useTranslation();
    
    const handleLangSwitch = (e: { target: { value: string; }; }) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
    };

    const [isLangRu, setIsLangRu] = useState<boolean>(true);
    const handleLangOptionShow = () => {
        if (document.documentElement.lang === `en`) {
            setIsLangRu(false);
        } else {
            setIsLangRu(true);
        }
    };

    const handleSelectOpen = () => {
        document.querySelector(`.select`)?.classList.add(`select-active`);
    };
    const handleSelectClose = () => {
        document.querySelector(`.select`)?.classList.remove(`select-active`);
    };

    useEffect(() => {
        handleLangOptionShow();
    }, [document.documentElement.lang])

    return (
        <div className="lang-switcher">
            <FormControl className="form">
                <Select
                    className="select" 
                    value={i18n.language} 
                    onChange={handleLangSwitch}
                    onOpen={handleSelectOpen}
                    onClose={handleSelectClose}
                    IconComponent={LangIcon}
                    sx={{ 
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0, },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0, },
                        fontSize: `1.8rem`
                    }}
                >
                    <MenuItem 
                        value="en"
                        sx={{
                            display: `flex`, justifyContent: `center`, alignItems: `center`,  width: `6rem`, height: `5.5rem`, padding: `2rem`, minWidth: `100%`, background: `#F3F3F3 !important`, transition: `all .5s`, ":hover": `#F3F3F3`
                        }}
                        className="en"
                    >EN</MenuItem>
                    <MenuItem 
                        value="ru"
                        sx={{
                            display: `flex`, justifyContent: `center`, alignItems: `center`,  width: `6rem`, height: `5.5rem`, padding: `2rem`, minWidth: `100%`, background: `#F3F3F3 !important`, transition: `all .5s`, ":hover": `#F3F3F3`
                        }}
                        className="ru"
                    >RU</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

export default LangSwitcher;