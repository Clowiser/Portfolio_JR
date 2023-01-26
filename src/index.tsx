import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n/translate/I18n";
import store from "./utils/store";
import {Provider} from "react-redux";
// @ts-ignore
import AlertTemplate from 'react-alert-template-basic'
import {positions, transitions, Provider as AlertProvider} from 'react-alert'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const options = {
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '30px',
    transition: transitions.FADE
}

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...options}>
                <App/>
            </AlertProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
