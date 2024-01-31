import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../../styles/footer/Footer.scss';
import ViberLogo from "./utilities/ViberLogo";
import TelegramLogo from "./utilities/TelegramLogo";
import WhatsAppLogo from "./utilities/WhatsAppLogo";
import { useLocation } from "react-router-dom";

const Footer = () => {

    const { t } = useTranslation();
    const location = useLocation();

    const [isContactPage, setIsContactPage] = useState<boolean>(false);

    useEffect(() => {
        if (location.pathname.includes(`contacts`)) {
            setIsContactPage(true);
            document.querySelector(`.authors`)?.classList.add(`alone`);
        } else {
            setIsContactPage(false);
            document.querySelector(`.authors`)?.classList.remove(`alone`);
        }
    }, [location]);

    return (
        <footer>
            <div className="container">
                {isContactPage ?
                    <></> 
                    :
                    <div className="contacts">
                        <a href="mailto:bfchanoff@gmail.com">bfchanoff@gmail.com</a>
                        <div className="contacts__icons">
                            <a href="viber://chat?number=%2B3752961019786">
                                <ViberLogo/>
                            </a>
                            <a href="https://t.me/Aleg_Ch">
                                <TelegramLogo/>
                            </a>                        
                            <a href="https://wa.me/48505025186">
                                <WhatsAppLogo/>
                            </a>
                        </div>
                    </div>
                }
                <div className="authors">
                    <div className="authors__author">
                        <span>{t (`Designer`)}:</span>
                        <a href="https://www.behance.net/mariashkrabo">{t (`Maria Shkrabo`)}</a>
                    </div>
                    <div className="authors__author">
                        <span>{t (`Programmer`)}:</span>
                        <a href="https://www.linkedin.com/in/rostislavchanov/">{t (`Rostislav Chanov`)}</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;