import React, {createContext, useState} from 'react';
import './style/App.css';
import {BrowserRouter} from "react-router-dom";
import store from "./app/store";
import {Provider} from "react-redux";
import PortfolioContainer from "./component/PortfolioContainer/PortfolioContainer";
import {LOCALES} from "./i18n/translate/locales";
import message from "./i18n/translate/message";
import {IntlProvider} from "react-intl";
import {createReducer, createStore} from "@reduxjs/toolkit";

// export interface IApp {
//     locale: string;
//     onLocaleChange: any;
// }

// let lang: any;
// const handleChangeLocale = () => {
//     if (initLocal === 'en') {
//         lang = LOCALES.ENGLISH;
//         return import("./i18n/translate/en");
//     } else {
//         if (initLocal === 'fr') {
//             lang = LOCALES.FRENCH;
//             return import("./i18n/translate/fr");
//         }
//     }
// }
let initLocal = navigator.language;
console.log(initLocal);
export const languageContext = createContext(initLocal);

const App = () => {

    const [language, setlanguage] = useState();

    const handleChangeLocale = () => {
        initLocal = LOCALES.ENGLISH;
        console.log("english power");
        console.log(initLocal);
    }

    return (
        <BrowserRouter>
            <Provider store={store}>
                <IntlProvider locale={initLocal} defaultLocale={LOCALES.ENGLISH} messages={message[initLocal]}
                >
                    <languageContext.Provider value={initLocal}>
                        <PortfolioContainer/>
                        <button onClick={handleChangeLocale}/>
                    </languageContext.Provider>
                </IntlProvider>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
