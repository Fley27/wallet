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
    SELECTED_EXPENSE_SUCCESS
} from "../consts";

const initialState = {
    expense: null,
    expenses: null,
    loading: false,
}

export default function ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
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

        case SELECTED_EXPENSE_SUCCESS:
        case CREATE_EXPENSE_SUCCESS:
            return {
                ...state,
                loading: false,
                expense: payload
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
