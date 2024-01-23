import React from "react";
import { useTranslation } from "react-i18next";

const TextComp = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t (`Text Component`)}
        </div>
    )
};

export default TextComp;