import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../store/store";
import MobileMenu from "./MobileMenu";

const MobileMenuContainer = () => {

    const screen: string = useSelector<IRootState, string>((state) => state.deviceType.screen);

    useEffect(() => {
        if (screen === `mobile`) setHiddenMenuPositionBehavior();
    }, [screen]);

    function setHiddenMenuPositionBehavior() {
        const menu: HTMLDivElement | null = document.querySelector(`.mobile-menu`);

        if (menu) {
            const header = document.querySelector(`.header`)!.getBoundingClientRect();
            window.addEventListener(`scroll`, () => setHiddenMenuPosition(window.scrollY, window.screen.height, header.height, menu));
        };
    };

    function setHiddenMenuPosition (windowScrollPosition: number, windowHeight: number, headerHeight: number, menu: HTMLDivElement) {
        menu.style.top = `${windowScrollPosition - windowHeight + headerHeight}px`;
    };

    return (
        <div className="mobile-menu">
             <MobileMenu/>
        </div>
    );
};

export default MobileMenuContainer;