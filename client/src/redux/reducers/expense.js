import {
    CREATE_EXPENSE_FAIL,
    CREATE_EXPENSE_REQUEST,
    CREATE_EXPENSE_SUCCESS,
    GET_EXPENSE_FAIL,
    GET_EXPENSE_REQUEST,
    GET_EXPENSE_SUCCESS,
    FILTER_EXPENSE_FAIL,
    FILTER_EXPENSE_REQUEST,
    FILTER_EXPENSE_SUCCESS,
    FILTER_BY_ID_EXPENSE_FAIL,
    FILTER_BY_ID_EXPENSE_REQUEST,
    FILTER_BY_ID_EXPENSE_SUCCESS, 
    DELETE_EXPENSE_FAIL,
    DELETE_EXPENSE_REQUEST,
    DELETE_EXPENSE_SUCCESS,
    SELECTED_EXPENSE_FAIL,
    SELECTED_EXPENSE_REQUEST,
    SELECTED_EXPENSE_SUCCESS,
    FILTER_TOTAL_AMOUNT_EXPENSE_BY_CURRENCY_FAIL,
    FILTER_TOTAL_AMOUNT_EXPENSE_BY_CURRENCY_REQUEST,
    FILTER_TOTAL_AMOUNT_EXPENSE_BY_CURRENCY_SUCCESS,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_FAIL,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_REQUEST,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_SUCCESS
} from "../consts";

const initialState = {
    expense: null,
    expenses: null,
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
        case FILTER_TOTAL_AMOUNT_EXPENSE_BY_CURRENCY_REQUEST:
            return {
                ...state, 
                loading: true,
                card: null,
            }

        case SELECTED_EXPENSE_REQUEST: 
        case CREATE_EXPENSE_REQUEST:
            return {
                ...state, 
                loading: true,
                expense: null,
            }
        case GET_EXPENSE_REQUEST:
            return {
                ...state, 
                loading: true,
                expenses: null
            }
        case DELETE_EXPENSE_REQUEST: {
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

        case SELECTED_EXPENSE_SUCCESS:
            return {
                ...state,
                loading: false,
                expense: payload
            }

        case CREATE_EXPENSE_SUCCESS:
            return {
                ...state,
                loading: false,
                expense: payload.expense, 
                expenses: payload.expenses
            }

        case FILTER_TOTAL_AMOUNT_EXPENSE_BY_CURRENCY_SUCCESS:
            return {
                ...state, 
                loading: false,
                card: payload[0],
            }

        case GET_EXPENSE_SUCCESS: 
            return {
                ...state,
                loading: false,
                expenses: payload
            }
        case DELETE_EXPENSE_SUCCESS: {
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

        case CREATE_EXPENSE_FAIL:
        case SELECTED_EXPENSE_FAIL: 
            return {
                ...state,
                loading: false,
                expense: null
            }
        case GET_EXPENSE_FAIL: 
            return {
                ...state,
                loading: false,
                expenses: null,
            }

        case FILTER_TOTAL_AMOUNT_EXPENSE_BY_CURRENCY_FAIL:
            return {
                ...state, 
                loading: false,
                card: null,
            }

        case DELETE_EXPENSE_FAIL: {
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
