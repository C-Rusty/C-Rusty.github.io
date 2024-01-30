import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ViberLogo from "../../../components/footer/utilities/ViberLogo";
import TelegramLogo from "../../../components/footer/utilities/TelegramLogo";
import WhatsAppLogo from "../../../components/footer/utilities/WhatsAppLogo";
import viber from '../../../images/footer/viber.svg'
import telegram from '../../../images/footer/telegram.svg';
import whatsApp from '../../../images/footer/whats-app.svg';
import '../../../styles/main/contacts.scss';

const Contacts = () => {

    const { t } = useTranslation();

    const [selectedMessenger, setSelectedMessenger] = useState(whatsApp);
    const [firstOption, setFirstOption] = useState(telegram);
    const [secondOption, setSecondOption] = useState(viber);

    const [currentMessengerString, setCurrentMessengerString] = useState<string>(`WhatsApp`);
    const [firstOptionString, setFirstOptionString] = useState(`Telegram`);
    const [secondOptionString, setSecondOptionString] = useState(`Viber`);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const nameInput = useRef<HTMLInputElement | null>(null);
    const phoneInput = useRef<HTMLInputElement | null>(null);

    const handleOpen = () => {
        if (isOpen) {
            document.querySelector(`.list__options`)?.classList.add(`opened`);
            document.querySelector(`.select__open-btn`)?.classList.add(`arrow-transform`);
        } else {
            document.querySelector(`.list__options`)?.classList.remove(`opened`);
            document.querySelector(`.select__open-btn`)?.classList.remove(`arrow-transform`);
        };
    };

    const handleClickMessenger = (option: string) => {
        if (option === `Telegram`) {
            setSelectedMessenger(telegram);
            setCurrentMessengerString(`Telegram`);
            setFirstOption(whatsApp);
            setFirstOptionString(`WhatsApp`);
            setSecondOption(viber);
            setSecondOptionString(`viber`);
        } else if (option === `Viber`) {
            setSelectedMessenger(viber);
            setCurrentMessengerString(`Viber`);
            setFirstOption(telegram);
            setFirstOptionString(`Telegram`);
            setSecondOption(whatsApp);
            setSecondOptionString(`WhatsApp`);
        } else if (option === `WhatsApp`) {
            setSelectedMessenger(whatsApp);
            setCurrentMessengerString(`WhatsApp`);
            setFirstOption(telegram);
            setFirstOptionString(`Telegram`);
            setSecondOption(viber);
            setSecondOptionString(`Viber`);
        };
    };

    useEffect(() => {
        handleOpen();
    }, [isOpen]);


    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        fetch(`https://getform.io/f/38a8aba7-a47e-418e-8c89-c108986d58e4`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:  nameInput.current!.value,
                phone: phoneInput.current!.value,
                messenger: currentMessengerString
            })
        }).then(response => {
            if (response.ok && response.status === 200) {
                nameInput.current!.value = ``;
                phoneInput.current!.value = ``;
                handleClickMessenger(`WhatsApp`);
            } else {
                console.log("error");
            }
        }).catch(error => {
            console.error("Error:", error);
        });
    };

    const setSelectBg = () => {
        document.querySelector(`.select-messenger`)?.classList.toggle(`gray-bg`);
        document.querySelector(`.messengers-label`)?.classList.toggle(`gray-bg`);
    };

    return(
        <div className="contact-me">
            <div className="container">
                <div className="text">
                    <h1>{t (`Contact with me`)}</h1>
                    <p>
                        {t (`Leave your contacts and I will contact you for a consultation`)}
                    </p>
                    <a href="mailto:info@alegchanov.com">
                        <img src="../../../images/content/contact-me/mail-icon.svg" alt="mail" />
                        <span>info@alegchanov.com</span>
                    </a>
                    <div className="social-logos">
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
                <div className="form">
                    <form action="submit" method="post" onSubmit={(e) => submitForm(e)}>
                        <label className="name-label">
                            <input 
                                required={true}
                                type="text" 
                                placeholder={t (`Name`)}
                                ref={nameInput}
                            />
                        </label>
                        <label className="messengers-label" onClick={setSelectBg}>
                            <input 
                                required={true}
                                type="tel"
                                placeholder={t (`Phone No. / select messenger for communication`)}
                                 ref={phoneInput}
                            />
                            <div className="select-messenger">
                                <img 
                                    src="../../../images/content/contact-me/arrow.svg" 
                                    alt="arrow"
                                    className="select__open-btn"
                                    onClick={() => setIsOpen(previousState => !previousState)}  
                                />
                                <div className="list">
                                    <img 
                                        src={selectedMessenger}  alt="selected-messenger" 
                                    />
                                    <div className="list__options">
                                        <img 
                                            src={firstOption} 
                                            alt="messenger"
                                            onClick={() => handleClickMessenger(firstOptionString)}
                                        />
                                        <img 
                                            src={secondOption} 
                                            alt="messenger" 
                                            onClick={() => handleClickMessenger(secondOptionString)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </label>
                        <button type="submit">{t (`Contact me`)}</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contacts;