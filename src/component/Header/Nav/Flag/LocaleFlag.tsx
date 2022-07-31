import {SFlag, SFlagTranslateContainer, SJRLogo} from "../Nav.styled";
import france_flag from "../../../../style/assets/img/flag/france.png";
import great_britain_flag from "../../../../style/assets/img/flag/great_britain.png";
import React, {createContext, useContext, useState} from "react";
import {languageContext} from "../../../../App";
import i18next from "i18next";
import {locales} from "../../../../i18n/translate/message";
import {log} from "util";

const LocaleFlag = () => {
    // @ts-ignore
    const {initLocal, handleSelect} = useContext(languageContext);

    return (
        <>
            <select onChange={handleSelect} defaultValue={initLocal}>
                {[locales.en, locales.fr].map(l => (
                    <option key={l}>{l}</option>
                ))}
            </select>
            {/*<SFlagTranslateContainer>*/}
            {/*    <SFlag onClick={() => handleLanguageEn(locales.fr)} defaultValue={initLocalD}>*/}
            {/*        <SImgFlag src={france_flag}*/}
            {/*                  alt="Drapeau Français"/>*/}
            {/*    </SFlag>*/}
            {/*    <SFlag onClick={() => handleLanguageEn(locales.en)} defaultValue={initLocalD}>*/}
            {/*        <SImgFlag*/}
            {/*            src={great_britain_flag}*/}
            {/*            alt="Drapeau anglais"/>*/}
            {/*    </SFlag>*/}
            {/*</SFlagTranslateContainer>*/}
        </>
    )
}

export default LocaleFlag;