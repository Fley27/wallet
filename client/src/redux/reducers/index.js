import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alert from "./alert";
import borrowing from "./borrowing";
import auth from "./auth";
import income from "./income";
import loan from "./loan";
import expense from "./expense";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'] 
}

const rootReducer =  combineReducers({
    alert,
    auth,
    income,
    borrowing,
    loan,
    expense
});

export default persistReducer(persistConfig, rootReducer)
