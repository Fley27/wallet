import React from "react"
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor}from "./src/redux/store";

export const APP = () =>(
    <Provider store = {store}>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => APP);
