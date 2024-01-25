import React from "react";
import { useTranslation } from "react-i18next";
import '../../styles/footer/Footer.scss';
import ViberLogo from "./utilities/ViberLogo";
import TelegramLogo from "./utilities/TelegramLogo";
import WhatsAppLogo from "./utilities/WhatsAppLogo";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer>
            <div className="container">
                <div className="contacts">
                    <a href="mailto:info@alegchanov.com">info@alegchanov.com</a>
                    <div className="contacts__icons">
                        <a href="viber://chat?number=%2BNUMBER">
                            <ViberLogo/>
                        </a>
                        <a href="https://t.me/USERNAME">
                            <TelegramLogo/>
                        </a>                        
                        <a href="https://wa.me/1XXXXXXXXXX">
                            <WhatsAppLogo/>
                        </a>
                    </div>
                </div>
                <div className="authors">
                    <span>{t (`Website design`)}:</span>
                    <a href="">{t (`Maria Shkrabo`)}</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;