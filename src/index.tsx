import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components";
import {Provider} from "react-redux";
import store from "./store";
import {ConnectedRouter} from "connected-react-router";
import {history} from "./reducers";
import Context from "./components/context";
import {ThemeProvider} from "styled-components";
import ErrorBoundary from "./components/error-boundary";

const Global = createGlobalStyle`
  * { 
    font-family: 'Merienda', cursive; 
    font-weight: 400;
    font-style: normal;
  }
  
  .root {
    overflow: hidden;
  }
`

const theme = {
    media : {
        phone : "(max-width : 426px)",
        tablet : "(max-width : 769px)",
        phoneL : "(max-width : 426px)"
    }
}

const linksData = [
    {id : 1,path : '/',label : 'Coffee house'},
    {id : 2,path : '/our-coffee-page/',label : 'Our Coffee'},
    {id : 3,path : '/for-your-pleasure-page/',label : 'For your pleasure'},
]

ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <Context.Provider value={linksData}>
                    <ThemeProvider theme={theme}>
                        <ConnectedRouter history={history}>
                            <Global/>
                            <App />
                        </ConnectedRouter>
                    </ThemeProvider>
                </Context.Provider>
            </ErrorBoundary>
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

