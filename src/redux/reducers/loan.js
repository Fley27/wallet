import {
    CREATE_LOAN_FAIL,
    CREATE_LOAN_REQUEST,
    CREATE_LOAN_SUCCESS,
    GET_LOAN_FAIL,
    GET_LOAN_REQUEST,
    GET_LOAN_SUCCESS,
    FILTER_LOAN_FAIL,
    FILTER_LOAN_REQUEST,
    FILTER_LOAN_SUCCESS,
    FILTER_BY_ID_LOAN_FAIL,
    FILTER_BY_ID_LOAN_REQUEST,
    FILTER_BY_ID_LOAN_SUCCESS, 
    DELETE_LOAN_FAIL,
    DELETE_LOAN_REQUEST,
    DELETE_LOAN_SUCCESS,
    SELECTED_LOAN_FAIL,
    SELECTED_LOAN_REQUEST,
    SELECTED_LOAN_SUCCESS
} from "../consts";

const initialState = {
    loan: null,
    loans: null,
    loading: false,
}

export default function ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_LOAN_REQUEST:
            return {
                ...state, 
                loadings: true,
                loans: null
            }
        case SELECTED_LOAN_REQUEST: 
        case CREATE_LOAN_REQUEST:
            return {
                ...state, 
                loading: true,
                loan: null,
            }
        case DELETE_LOAN_REQUEST: {
            return{
                ...state,
                loading: true,
            }
        }

        case SELECTED_LOAN_SUCCESS:
        case CREATE_LOAN_SUCCESS:
            return {
                ...state,
                loading: false,
                loan: payload
            }
        case GET_LOAN_SUCCESS: 
            return {
                ...state,
                loading: false,
                loans: payload
            }
        case DELETE_LOAN_SUCCESS: {
            return{
                ...state,
                loading: false,
            }
        }
        case CREATE_LOAN_FAIL:
        case SELECTED_LOAN_FAIL: 
            return {
                ...state,
                loading: false,
                loan: null
            }
        case GET_LOAN_FAIL: 
            return {
                ...state,
                loading: false,
                loans: null,
            }
        case DELETE_LOAN_FAIL: {
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

