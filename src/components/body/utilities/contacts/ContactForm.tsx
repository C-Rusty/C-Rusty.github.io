import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import telegram from '../../../../images/footer/telegram.svg'
import viber from '../../../../images/footer/viber.svg'
import whatsApp from '../../../../images/footer/whats-app.svg'

const ContactForm = () => {

    const { t } = useTranslation();

    const telegram: string = `../../../../images/footer/telegram.svg`;
    const viber: string = `../../../../images/footer/viber.svg`;
    const whatsApp: string = `../../../../images/footer/whats-app.svg`;

    const options: Array<string> = [telegram, viber, whatsApp];

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

    return (
        <div className="form-container">
            <form action="submit" method="post" onSubmit={(e) => submitForm(e)}>
                <label className="name">
                    <input 
                        required={true}
                        type="text" 
                        placeholder={t (`Name`)}
                        ref={nameInput}
                    />
                </label>
                <label className="phone">
                    <input 
                        required={true}
                        type="tel"
                        placeholder={t (`Phone No. / Messenger *`)}
                        ref={phoneInput}
                    />
                    <select>
                        {options.map(option => 
                            <option style={{}}>
                                <span style={{backgroundImage: `url(${option})`}}></span>
                            </option>
                        )}
                    </select>
                </label>
                <button type="submit">{t (`Contact me`)}</button>
            </form>
    </div>
    );
};

export default ContactForm;