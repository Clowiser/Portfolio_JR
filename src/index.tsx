import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./component/Header/Header";
import Portfolio from "./component/Portfolio/Portfolio";
import Information from "./component/Information/Information";
import Footer from "./component/Footer/Footer";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Header/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/biographie" element={<Information/>}/>
            </Routes>
            {/*<Footer/>*/}
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
