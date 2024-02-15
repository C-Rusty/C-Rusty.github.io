import React, { useRef } from "react";

const Form = () => {

    const nameInput = useRef<HTMLInputElement | null>(null);
    const phoneInput = useRef<HTMLInputElement | null>(null);

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
    );
};

export default Form;