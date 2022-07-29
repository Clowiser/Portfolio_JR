import English from "../../../i18n/oldTranslate/en";
import Francais from "../../../i18n/oldTranslate/fr";
import {SFlag, SFlagTranslateContainer, SImgFlag} from "./Nav.styled";
import france_flag from "../../../style/assets/img/flag/france.png";
import great_britain_flag from "../../../style/assets/img/flag/great_britain.png";
import React, {useContext} from "react";
import {languageContext} from "../../../App";
import {LOCALES} from "../../../i18n/translate/locales";

const LocaleFlag = () => {
    let translate = useContext(languageContext);

    let lang: any;
    // const handleChangeLocale = () => {
    //     if (translate === 'en-US') {
    //         lang = LOCALES.ENGLISH;
    //         console.log("english power");
    //         return import("../../../i18n/translate/message");
    //     } else {
    //         if (translate === 'fr-FR') {
    //             lang = LOCALES.FRENCH;
    //             console.log("la baguette");
    //             return import("../../../i18n/translate/message");
    //         }
    //     }
    // }

    console.log(translate);
    const handleChangeLocale = () => {
        translate = LOCALES.ENGLISH;
        console.log(translate);
        console.log("english power");
        return import("../../../i18n/translate/message");
        console.log(translate);
    }

    return (
        <SFlagTranslateContainer>
            <SFlag>
                <SImgFlag onClick={() => handleChangeLocale()} src={france_flag} alt="Drapeau Français"/>
            </SFlag>
            <SFlag>
                <SImgFlag onClick={() => handleChangeLocale()} src={great_britain_flag} alt="Drapeau anglais"/>
            </SFlag>
        </SFlagTranslateContainer>
    )

}

export default LocaleFlag;