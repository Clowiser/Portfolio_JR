import React, {useState} from 'react';
import './style/App.css';
import Home from "./component/Home/Home";
import English from "./i18n/translate/en";
import Francais from "./i18n/translate/fr";
import {IntlProvider} from "react-intl";
import {BrowserRouter} from "react-router-dom";
import Router from "./component/Router/Router";
import store from "./app/store";
import {Provider} from "react-redux";
import PortfolioContainer from "./component/PortfolioContainer/PortfolioContainer";

// const locale = navigator.language;
//
// console.log(locale)
//
// let lang: any;
// if (locale === 'en-US') {
//     lang = English;
// } else {
//     if (locale === 'fr-FR') {
//         lang = Francais;
//     }
// }

const locale = IntlProvider.defaultProps.defaultLocale;

console.log(locale)

let lang: any;
if (locale === 'en') {
    lang = English;
}

const App: React.FC = () => {
    // const [messages, setMessages] = useState(lang);


    return (
        <BrowserRouter>
            <Provider store={store}>
                {/*<IntlProvider locale={locale} defaultLocale={locale} messages={messages}>*/}
                <IntlProvider messages={{}} locale="en" defaultLocale="en">
                    <PortfolioContainer/>
                </IntlProvider>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
