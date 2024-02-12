import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FiltersBar from "./FiltersBar";
import MobileMenu from "./MobileMenu";
import { IRootState } from "../../../../store/store";

const MobileMenuContainer = () => {

    const buttonClicked = useSelector<IRootState, string>((state) => state.buttonClicked.button);
    const isMobileMenuOpened = useSelector<IRootState>((state) => state.MenuStateReducer.isVisible);

    const [openedMenuComponent, setOpenedMenuComponent] = useState<string>(``);

    useEffect(() => {
        isMobileMenuOpened ? document.body.style.overflowY = `hidden` : document.body.style.overflowY = `auto`; 

        const menu = document.querySelector(`.mobile-menu`);
        menu?.classList.toggle(`opened`);

        if (buttonClicked === `mobileMenu`) {
            setOpenedMenuComponent(`mobileMenu`);
        } else if (buttonClicked === `mobileFilters`) {
            setOpenedMenuComponent(`mobileFilters`);
        };
    }, [isMobileMenuOpened]);

    useEffect(() => {
        console.log(buttonClicked);
        
    }, [buttonClicked])

    return (
        <div className="mobile-menu">
            {
                buttonClicked === `mobileMenu` ? <MobileMenu/>
                : buttonClicked === `mobileFilters` ? <FiltersBar/>
                : 
                    <>
                        {openedMenuComponent === `mobileMenu` ? 
                            <MobileMenu/>
                            :
                            <FiltersBar/>
                        }
                    </>
            }
        </div>
    );
};

export default MobileMenuContainer;