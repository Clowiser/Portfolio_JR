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

const locale = navigator.language;

let lang: any;
if (locale === 'en') {
    lang = English;
} else {
    if (locale === 'fr') {
        lang = Francais;
    }
}

const App: React.FC = () => {
    const [messages, setMessages] = useState(lang);

    return (
        <BrowserRouter>
            <Provider store={store}>
                <IntlProvider locale={locale}>
                    <PortfolioContainer/>
                </IntlProvider>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
