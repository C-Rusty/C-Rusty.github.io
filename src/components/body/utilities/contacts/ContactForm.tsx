import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {

    const { t } = useTranslation();

    const telegram: string = `../../../../images/footer/telegram.svg`;
    const viber: string = `../../../../images/footer/viber.svg`;
    const whatsApp: string = `../../../../images/footer/whats-app.svg`;

    const [selectedMessenger, setSelectedMessenger] = useState<string>(whatsApp);
    const [options, setOptions] = useState<Array<string>>([viber, telegram]);
    const allMessengers: Array<string> = [telegram, viber, whatsApp];

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

    const handleSelect = (selectedOption: string) => {
        if (selectedOption.includes(`telegram`)) {
            setOptions(allMessengers.filter(messenger => messenger !== selectedOption));
            setSelectedMessenger(telegram);
        } 
        else if (selectedOption.includes(`viber`)) {
            setSelectedMessenger(viber);
            setOptions(allMessengers.filter(messenger => messenger !== selectedOption));
        } 
        else if (selectedOption.includes(`whats-app`)) {
            setSelectedMessenger(whatsApp);
            setOptions(allMessengers.filter(messenger => messenger !== selectedOption));
        };
    };

    useEffect(() => {
        handleOpen();
    }, [isOpen]);


    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            service_id: 'service_ms5x63y',
            template_id: 'template_9qfcfhf',
            user_id: '-GnWfbXVoK4IzkfI3',
            template_params: {
                name:  nameInput.current!.value,
                phone: phoneInput.current!.value,
                messenger: selectedMessenger.split(`/`)[6].split(`.`)[0]
            }
        };
        
        fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok && response.status === 200) {
                nameInput.current!.value = ``;
                phoneInput.current!.value = ``;
            } else {
                console.log("error");
            };
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
                    <div 
                        className="phone__select-messenger"
                        onClick={() => setIsOpen(previousState => !previousState)}  
                    >
                        <img 
                            src="../../../images/content/contact-me/arrow.svg" 
                            alt="arrow"
                            className="select__open-btn"
                        />
                        <div className="list">
                            <div className="list__selected">
                                <img 
                                    src={selectedMessenger} alt="selectedMessenger" 
                                />
                            </div>
                            <div className="list__options">
                                {options.map(option =>
                                    <img 
                                        src={option}
                                        onClick={() => handleSelect(option)}
                                    />    
                                )}
                            </div>
                        </div>
                    </div>
                </label>
                <button type="submit">{t (`Contact me`)}</button>
            </form>
        </div>
    );
};

export default ContactForm;