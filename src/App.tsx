import React, {createContext, useState} from 'react';
import './style/App.css';
import {BrowserRouter} from "react-router-dom";
import PortfolioApp from "./Page/AppPortfolio/PortfolioApp";
import message, {locales} from "./i18n/translate/message";
import {IntlProvider} from "react-intl";
import FontsStyle from "./fonts/FontsStyle";
import {ThemeProvider} from "styled-components";
import theme from "./style/theme/Theme";
import ScrollButton from "./Page/utils/Scroll/ScrollButton";
import {Content} from "./Page/utils/Scroll/ScrollButton.styled";

export const languageContext = createContext({});

const App = () => {
    const [initLocal, setInitLocal] = useState("fr-FR");
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setInitLocal(event.target.value);
    };

    return (
        <BrowserRouter>
            <IntlProvider locale={initLocal} defaultLocale={locales.fr} messages={message[initLocal]}
            >
                <ThemeProvider theme={theme}>
                    <languageContext.Provider value={{handleSelect}}>
                        <FontsStyle/>
                        <PortfolioApp/>
                        <Content/>
                        <ScrollButton/>
                    </languageContext.Provider>
                </ThemeProvider>
            </IntlProvider>
        </BrowserRouter>
    );
}

export default App;
