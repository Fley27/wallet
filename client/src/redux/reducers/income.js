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
    SELECTED_INCOME_SUCCESS,
    FILTER_TOTAL_AMOUNT_INCOME_BY_CURRENCY_FAIL,
    FILTER_TOTAL_AMOUNT_INCOME_BY_CURRENCY_REQUEST,
    FILTER_TOTAL_AMOUNT_INCOME_BY_CURRENCY_SUCCESS,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_FAIL,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_REQUEST,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_SUCCESS
} from "../consts";

const initialState = {
    income: null,
    incomes: null,
    loading: false,
    card: null,
    dataChart: []
}

export default function ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_REQUEST:
            return {
                ...state, 
                dataChart: [],
            }

        case FILTER_TOTAL_AMOUNT_INCOME_BY_CURRENCY_REQUEST:
            return {
                ...state, 
                loading: true,
                card: null,
            }
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

        case TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_SUCCESS:
            return {
                ...state, 
                loading: false,
                dataChart: payload,
            }

        case FILTER_TOTAL_AMOUNT_INCOME_BY_CURRENCY_SUCCESS:
            return {
                ...state, 
                loading: false,
                card: payload[0],
            }

        case SELECTED_INCOME_SUCCESS:
            return {
                ...state,
                loading: false,
                income: payload, 
            }

        case CREATE_INCOME_SUCCESS:
            return {
                ...state,
                loading: false,
                income: payload.income, 
                incomes: payload.incomes
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

        case TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_FAIL:
            return {
                ...state, 
                loading: false,
                dataChart: [],
            }

        case FILTER_TOTAL_AMOUNT_INCOME_BY_CURRENCY_FAIL:
            return {
                ...state, 
                loading: false,
                card: null,
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
