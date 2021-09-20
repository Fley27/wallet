import {
    CREATE_BORROWING_FAIL,
    CREATE_BORROWING_REQUEST,
    CREATE_BORROWING_SUCCESS,
    GET_BORROWING_FAIL,
    GET_BORROWING_REQUEST,
    GET_BORROWING_SUCCESS,
    FILTER_BORROWING_FAIL,
    FILTER_BORROWING_REQUEST,
    FILTER_BORROWING_SUCCESS,
    FILTER_BY_ID_BORROWING_FAIL,
    FILTER_BY_ID_BORROWING_REQUEST,
    FILTER_BY_ID_BORROWING_SUCCESS, 
    DELETE_BORROWING_FAIL,
    DELETE_BORROWING_REQUEST,
    DELETE_BORROWING_SUCCESS,
    SELECTED_BORROWING_FAIL,
    SELECTED_BORROWING_REQUEST,
    SELECTED_BORROWING_SUCCESS,
    FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_FAIL,
    FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_REQUEST,
    FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_SUCCESS,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_FAIL,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_REQUEST,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_SUCCESS
} from "../consts";

const initialState = {
    borrowing: false,
    borrowings: null,
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
        case FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_REQUEST:
            return {
                ...state, 
                loading: true,
                card: null,
            }
        case SELECTED_BORROWING_REQUEST: 
        case CREATE_BORROWING_REQUEST:
            return {
                ...state, 
                loading: true,
                borrowing: false,
            }
            
        case GET_BORROWING_REQUEST:
            return {
                ...state, 
                loading: true,
                borrowings: null
            }
        case DELETE_BORROWING_REQUEST: {
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

        case SELECTED_BORROWING_SUCCESS:
            return {
                ...state,
                loading: false,
                borrowing: payload
            }
        
        case CREATE_BORROWING_SUCCESS:
            return {
                ...state,
                loading: false,
                borrowing: payload.borrowing,
                borrowings: payload.borrowings
            }

        case FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_SUCCESS:
            return {
                ...state, 
                loading: false,
                card: payload[0],
            }
        
        case GET_BORROWING_SUCCESS: 
            return {
                ...state,
                loading: false,
                borrowings: payload
            }
        case DELETE_BORROWING_SUCCESS: {
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

        case FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_FAIL:
            return {
                ...state, 
                loading: false,
                card: null,
            }
        case CREATE_BORROWING_FAIL:
        case SELECTED_BORROWING_FAIL: 
            return {
                ...state,
                loading: false,
                borrowing: false
            }
        case GET_BORROWING_FAIL: 
            return {
                ...state,
                loading: false,
                borrowings: null,
            }
        case DELETE_BORROWING_FAIL: {
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


