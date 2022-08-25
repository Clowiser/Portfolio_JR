import {SFlag, SFlagTranslateContainer, SImgFlag, SJRLogo, SLocalFlagContainer} from "../Nav.styled";
import france_flag from "../../../../style/assets/img/flag/france.png";
import great_britain_flag from "../../../../style/assets/img/flag/great_britain.png";
import React, {useContext} from "react";
import {languageContext} from "../../../../App";
import {locales} from "../../../../i18n/translate/message";

const LocaleFlag = () => {
    // @ts-ignore
    const {initLocal, handleSelect} = useContext(languageContext);

    return (
        <SLocalFlagContainer>
            {initLocal === locales.fr ? <SImgFlag src={france_flag} alt="Drapeau Français"/> :
                <SImgFlag src={great_britain_flag} alt="Drapeau anglais"/>}
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
        </SLocalFlagContainer>
    )
}

export default LocaleFlag;