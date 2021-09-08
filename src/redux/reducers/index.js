import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from "./auth";
import income from "./income";
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'] 
}

const rootReducer =  combineReducers({
    auth,
    income
});

export default persistReducer(persistConfig, rootReducer)
