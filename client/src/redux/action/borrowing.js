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
    link,
    SELECTED_BORROWING_FAIL,
    SELECTED_BORROWING_REQUEST,
    SELECTED_BORROWING_SUCCESS,
    FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_FAIL,
    FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_REQUEST,
    FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_SUCCESS,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_FAIL,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_REQUEST,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_SUCCESS,
    PAYMENT_FAIL,
    PAYMENT_REQUEST,
    PAYMENT_SUCCESS
} from "../consts";
import axios from "axios";

export const payBorrowing = (borrowingData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: PAYMENT_REQUEST
    })
    const body = borrowingData;
    try {
        const res = await axios.post(`${link}/loan/pay`, 
            body,
            config
        )
        dispatch({
            type: PAYMENT_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PAYMENT_FAIL
        })
    }
}


export const getTotalAmountTheLastSixMonthBorrowing = (borrowingData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_REQUEST
    })
    const body = borrowingData;
    try {
        const res = await axios.post(`${link}/borrowing/sum-last-six-month`, 
            body,
            config
        )
        dispatch({
            type: TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_FAIL
        })
    }
}

export const createBorrowing = (borrowingData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: CREATE_BORROWING_REQUEST
    })
    try {
        const res = await axios.post(`${link}/borrowing`, 
            borrowingData,
            config
        )
        dispatch({
            type: CREATE_BORROWING_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_BORROWING_FAIL
        })
    }
}

export const getBorrowing = (borrowingData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: GET_BORROWING_REQUEST
    })
    const body = borrowingData;
    try {
        const res = await axios.post(`${link}/borrowing/all`, 
            body,
            config
        )
        dispatch({
            type: GET_BORROWING_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_BORROWING_FAIL
        })
    }
}

export const getTotalAmountByCurrencyBorrowing = (borrowingData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_REQUEST
    })
    const body = borrowingData;
    try {
        const res = await axios.post(`${link}/borrowing/sum-by-currency`, 
            body,
            config
        )
        dispatch({
            type: FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_TOTAL_AMOUNT_BORROWING_BY_CURRENCY_FAIL
        })
    }
}

export const filterBorrowing = (borrowingData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_BORROWING_REQUEST
    })
    const body = JSON.stringify(borrowingData);
    try {
        const res = await axios.get(`${link}/borrowing/filter`, 
            body,
            config
        )
        dispatch({
            type: FILTER_BORROWING_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_BORROWING_FAIL
        })
    }
}

export const filterByIdBorrowing = (borrowingData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_BY_ID_BORROWING_REQUEST
    })
    const body = JSON.stringify(borrowingData);
    try {
        const res = await axios.get(`${link}/borrowing/one`, 
            body,
            config
        )
        dispatch({
            type: FILTER_BY_ID_BORROWING_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_BY_ID_BORROWING_FAIL
        })
    }
}

export const deleteBorrowing = (borrowingData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: DELETE_BORROWING_REQUEST
    })
    const body = JSON.stringify(borrowingData);
    try {
        const res = await axios.delete(`${link}/borrowing`, 
            body,
            config
        )
        dispatch({
            type: DELETE_BORROWING_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: DELETE_BORROWING_FAIL
        })
    }
}

export const selectBorrowing = (borrowingData) => async (dispatch) => {
    dispatch({
        type: SELECTED_BORROWING_REQUEST
    })
    try {
        dispatch({
            type: SELECTED_BORROWING_SUCCESS,
            payload: borrowingData
        })
    } catch (error) {
        dispatch({
            type: SELECTED_BORROWING_FAIL
        })
    }
}
