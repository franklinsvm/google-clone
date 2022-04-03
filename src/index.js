import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import "./global.css";

import App from "./App";
import { ResultContextProvider } from "./contexts/ResultContextProvider"

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <ResultContextProvider>
    <Router>
        <App />
    </Router>
    </ResultContextProvider>
);