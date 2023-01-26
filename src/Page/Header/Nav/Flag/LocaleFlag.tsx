import {SImgFlag, SinputHide, SLocalFlagContainer} from "./LocaleFlag.styled";
import france_flag from "../../../../style/assets/img/flag/france.png";
import great_britain_flag from "../../../../style/assets/img/flag/great_britain.png";
import React, {useContext} from "react";
import {languageContext} from "../../../../App";
import {locales} from "../../../../i18n/translate/message";

const LocaleFlag = () => {
    // @ts-ignore
    const {handleSelect} = useContext(languageContext);

    return (
        <SLocalFlagContainer>
            <label>
                <SImgFlag src={france_flag} alt="Drapeau Français"/>
                <SinputHide type="radio" name="locale" value={locales.fr} onChange={handleSelect}/>
            </label>

            <label>
                <SImgFlag src={great_britain_flag} alt="Drapeau anglais"/>
                <SinputHide type="radio" name="locale" value={locales.en} onChange={handleSelect}/>
            </label>
        </SLocalFlagContainer>
    )
}

export default LocaleFlag;