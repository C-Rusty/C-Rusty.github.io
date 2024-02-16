import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryTag } from "../../../../store/CategoryTagReducer";
import { setTypeTag } from "../../../../store/TypeTagReducer";
import '../../../../styles/main/utilities/FiltersBar.scss';
import { IRootState } from "../../../../store/store";

const FiltersBar = () => {

    const [isApplyClicked, setIsApplyClicked] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleClickTag = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {

        if (e.currentTarget.parentElement?.classList.contains(`types-list`)) {
            const currentActiveTypeTag = document.querySelector(`.active-type-tag`);

            currentActiveTypeTag?.classList.remove(`active-type-tag`);
            const navItemClicked = e.currentTarget;

            document.getElementById(`${navItemClicked.id}`)!.classList.add(`active-type-tag`);

        } else if (e.currentTarget.parentElement?.classList.contains(`categories-list`)) {
            const currentActiveCategoryTag = document.querySelector(`.active-category-tag`);
            currentActiveCategoryTag?.classList.remove(`active-category-tag`);
            const navItemClicked = e.currentTarget;

            document.getElementById(`${navItemClicked.id}`)?.classList.add(`active-category-tag`);
        };
    };

    const deviceType = useSelector<IRootState, string>((state) => state.deviceType.screen);
    const dispatch = useDispatch();

    const handleCategoryClick = (category: string) => {
        dispatch(setCategoryTag(category));
    };

    const handleTypeClick = (type: string) => {
        dispatch(setTypeTag(type));
    };

    const handleTagClick = ( {tagType: string } ) => {
        switch (deviceType) {
            case `desktop`:
                
            break;

            case `mobile`:
                
            break;
        
            default: break;
        }
    };

    return (
        <>
            <nav className="nav-bar">
                <div className="nav-bar__types">
                    <span>{t (`Type`)}</span>
                    {/* <input type="file" name="" id=""
                        onChange={ (e) => handleUpload(e.target.files![0])}
                    /> */}
                    <ul className="list types-list">
                        <li
                            onClick={(e) => {
                                handleTypeClick(`All`);
                                handleClickTag(e)
                            }}
                            id="all-types"
                            className="active-type-tag"
                        >{t (`All`)}</li>
                        <li
                            onClick={(e) => {
                                handleTypeClick(`Articles`);
                                handleClickTag(e)
                            }}
                            id="articles"
                        >{t (`Articles`)}</li>
                        <li
                            onClick={(e) => {
                                handleTypeClick(`Cases`);
                                handleClickTag(e)
                            }}
                            id="cases"
                        >{t (`Cases`)}</li>
                    </ul>
                </div>
                <div className="nav-bar__categories">
                    <span>{t (`Category`)}</span>
                    <ul className="list categories-list">
                        <li
                            onClick={(e) => {
                                handleCategoryClick(`All`);
                                handleClickTag(e)
                            }}
                            id="all-categories"
                            className="active-category-tag"
                        >{t (`All`)}</li>
                        <li
                            onClick={(e) => {
                                handleCategoryClick(`Marketing`);
                                handleClickTag(e)
                            }}
                            id="marketing"
                        >{t (`Marketing`)}</li>
                        <li
                            onClick={(e) => {
                                handleCategoryClick(`Strategy`);
                                handleClickTag(e)
                            }}
                            id="strategy"
                        >{t (`Strategy development`)}</li>
                    </ul>
                </div>
            </nav>
            {deviceType === `mobile` && 
                <button onClick={}>{t (`Apply`)}</button>
            }
        </>

    );
};

export default FiltersBar;