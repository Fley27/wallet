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
    SELECTED_BORROWING_SUCCESS
} from "../consts";

const initialState = {
    borrowing: null,
    borrowings: null,
    loading: false,
}

export default function ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SELECTED_BORROWING_REQUEST: 
        case CREATE_BORROWING_REQUEST:
            return {
                ...state, 
                loading: true,
                borrowing: null,
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

        case SELECTED_BORROWING_SUCCESS:
        case CREATE_BORROWING_SUCCESS:
            return {
                ...state,
                loading: false,
                borrowing: payload
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
        case CREATE_BORROWING_FAIL:
        case SELECTED_BORROWING_FAIL: 
            return {
                ...state,
                loading: false,
                borrowing: null
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


