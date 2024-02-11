import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FiltersBar from "./FiltersBar";
import MobileMenu from "./MobileMenu";

const Menu = () => {

    const buttonClicked = useSelector((state) => state.buttonClicked.value);

    const [isMobileMenuShow, setIsMobileMenuShow] = useState<boolean>(false);

    useEffect(() => {
        if (buttonClicked === `mobileMenu`) {
            setIsMobileMenuShow(true);
        } else  {
            setIsMobileMenuShow(false);
        };
        console.log(buttonClicked);
    }, [buttonClicked]);

    return (
        <div className="menu">
            {
                isMobileMenuShow ?
                <MobileMenu/>
                :
                <FiltersBar/>
            }
        </div>
    );
};

export default Menu;