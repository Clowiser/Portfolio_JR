import React, {createContext, useState} from 'react';
import './style/App.css';
import {BrowserRouter} from "react-router-dom";
import PortfolioContainer from "./component/PortfolioContainer/PortfolioContainer";
import message, {locales} from "./i18n/translate/message";
import {IntlProvider} from "react-intl";

export const languageContext = createContext({});

const App = () => {
    const [initLocal, setInitLocal] = useState("fr-FR");
    // const [initLocalD, setInitLocalD] = useState("fr-FR");

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setInitLocal(event.target.value);
    };

    // const handleLanguageEn = (locales: "fr-FR" | "en-US") => {
    //     setInitLocalD(locales);
    //     console.log(locales);
    // }

    return (
        <BrowserRouter>
            <IntlProvider locale={initLocal} defaultLocale={locales.fr} messages={message[initLocal]}
            >
                <languageContext.Provider value={{initLocal, handleSelect}}>
                    <PortfolioContainer/>
                </languageContext.Provider>
            </IntlProvider>
        </BrowserRouter>
    );
}

export default App;
