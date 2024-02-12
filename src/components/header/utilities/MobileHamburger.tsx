import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../../store/MenuOpenReducer";
import { setButton } from "../../../store/ButtonClickReducer";
import { IRootState } from "../../../store/store";

const MobileHamburger = () => {

    const isMobileMenuOpened = useSelector<IRootState, boolean>((state) => state.MenuStateReducer.isVisible);

    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch(setState(!isMobileMenuOpened));
    };

    const handleMobileMenuState = () => {
        switch (isMobileMenuOpened) {
            case true:
                dispatch(setButton(`mobileMenu`));
                break;
            case false: 
                dispatch(setButton(`none`));
                break;
            default:
                break;
        };
    };

    useEffect(() => {
        const hamburger = document.querySelector(`.hamburger`);
        hamburger?.classList.toggle(`hamburger-active`);

        handleMobileMenuState();
    }, [isMobileMenuOpened]);

    return (
        <div 
            className="hamburger" 
            onClick={handleHamburgerClick}
        >
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
        </div>
    );
};

export default MobileHamburger;