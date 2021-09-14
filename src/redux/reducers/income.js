import {
    CREATE_INCOME_FAIL,
    CREATE_INCOME_REQUEST,
    CREATE_INCOME_SUCCESS,
    GET_INCOME_FAIL,
    GET_INCOME_REQUEST,
    GET_INCOME_SUCCESS,
    FILTER_INCOME_FAIL,
    FILTER_INCOME_REQUEST,
    FILTER_INCOME_SUCCESS,
    FILTER_BY_ID_INCOME_FAIL,
    FILTER_BY_ID_INCOME_REQUEST,
    FILTER_BY_ID_INCOME_SUCCESS, 
    DELETE_INCOME_FAIL,
    DELETE_INCOME_REQUEST,
    DELETE_INCOME_SUCCESS,
    SELECTED_INCOME_FAIL,
    SELECTED_INCOME_REQUEST,
    SELECTED_INCOME_SUCCESS
} from "../consts";

const initialState = {
    income: null,
    incomes: null,
    loading: false,
}

export default function ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SELECTED_INCOME_REQUEST: 
        case CREATE_INCOME_REQUEST:
            return {
                ...state, 
                loading: true,
                income: null,
            }
        case GET_INCOME_REQUEST:
            return {
                ...state, 
                loading: true,
                incomes: null
            }
        case DELETE_INCOME_REQUEST: {
            return{
                ...state,
                loading: true,
            }
        }

        case SELECTED_INCOME_SUCCESS:
        case CREATE_INCOME_SUCCESS:
            return {
                ...state,
                loading: false,
                income: payload
            }
        case GET_INCOME_SUCCESS: 
            return {
                ...state,
                loading: false,
                incomes: payload
            }
        case DELETE_INCOME_SUCCESS: {
            return{
                ...state,
                loading: false,
            }
        }
        case CREATE_INCOME_FAIL:
        case SELECTED_INCOME_FAIL: 
            return {
                ...state,
                loading: false,
                income: null
            }
        case GET_INCOME_FAIL: 
            return {
                ...state,
                loading: false,
                incomes: null,
            }
        case DELETE_INCOME_FAIL: {
            return{
                ...state,
                loading: false,
            }
        }
        default: {
            return state
        }
    }
}

//"user": {"exp": 1633630904, "iat": 1630030904, "user": [Object]}}}
