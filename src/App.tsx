import React, {createContext, useState} from 'react';
import './style/App.css';
import {BrowserRouter} from "react-router-dom";
import PortfolioApp from "./component/AppPortfolio/PortfolioApp";
import message, {locales} from "./i18n/translate/message";
import {IntlProvider} from "react-intl";
import FontsStyle from "./fonts/FontsStyle";
import {ThemeProvider} from "styled-components";
import theme from "./style/theme/Theme";
import ScrollButton from "./component/utils/Scroll/ScrollButton.styled";
import {Content} from "./component/utils/Scroll/ScrollButton";

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
                    <languageContext.Provider value={{initLocal, handleSelect}}>
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
