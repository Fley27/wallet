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
    link, 
    SELECTED_LOAN_FAIL,
    SELECTED_LOAN_REQUEST,
    SELECTED_LOAN_SUCCESS,
    FILTER_TOTAL_AMOUNT_LOAN_BY_CURRENCY_FAIL,
    FILTER_TOTAL_AMOUNT_LOAN_BY_CURRENCY_REQUEST,
    FILTER_TOTAL_AMOUNT_LOAN_BY_CURRENCY_SUCCESS,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_FAIL,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_REQUEST,
    TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_SUCCESS,
    PAYMENT_FAIL,
    PAYMENT_REQUEST,
    PAYMENT_SUCCESS
} from "../consts";
import axios from "axios";

export const payLoan = (loanData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: PAYMENT_REQUEST
    })
    const body = loanData;
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

export const getTotalAmountTheLastSixMonthLoan = (loanData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_REQUEST
    })
    const body = loanData;
    try {
        const res = await axios.post(`${link}/loan/sum-last-six-month`, 
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

export const getTotalAmountByCurrencyLoan = (loanData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_TOTAL_AMOUNT_LOAN_BY_CURRENCY_REQUEST
    })
    const body = loanData;
    try {
        const res = await axios.post(`${link}/loan/sum-by-currency`, 
            body,
            config
        )
        dispatch({
            type: FILTER_TOTAL_AMOUNT_LOAN_BY_CURRENCY_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_TOTAL_AMOUNT_LOAN_BY_CURRENCY_FAIL
        })
    }
}
export const createLoan = (loanData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: CREATE_LOAN_REQUEST
    })
    const body = loanData;
    try {
        const res = await axios.post(`${link}/loan`, 
            body,
            config
        )
        dispatch({
            type: CREATE_LOAN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_LOAN_FAIL
        })
    }
}

export const getLoan = (loanData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: GET_LOAN_REQUEST
    })
    const body = loanData;
    try {
        const res = await axios.post(`${link}/loan/all`, 
            body,
            config
        )
        dispatch({
            type: GET_LOAN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_LOAN_FAIL
        })
    }
}

export const filterLoan = (loanData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_LOAN_REQUEST
    })
    const body = JSON.stringify(loanData);
    try {
        const res = await axios.get(`${link}/loan/filter`, 
            body,
            config
        )
        dispatch({
            type: FILTER_LOAN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_LOAN_FAIL
        })
    }
}

export const filterByIdLoan = (loanData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_BY_ID_LOAN_REQUEST
    })
    const body = JSON.stringify(loanData);
    try {
        const res = await axios.get(`${link}/loan/one`, 
            body,
            config
        )
        dispatch({
            type: FILTER_BY_ID_LOAN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_BY_ID_LOAN_FAIL
        })
    }
}

export const deleteLoan = (loanData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: DELETE_LOAN_REQUEST
    })
    const body = JSON.stringify(loanData);
    try {
        const res = await axios.delete(`${link}/loan`, 
            body,
            config
        )
        dispatch({
            type: DELETE_LOAN_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: DELETE_LOAN_FAIL
        })
    }
}

export const selectLoan = (loanData) => async (dispatch) => {
    dispatch({
        type: SELECTED_LOAN_REQUEST
    })
    try {
        dispatch({
            type: SELECTED_LOAN_SUCCESS,
            payload: loanData
        })
    } catch (error) {
        dispatch({
            type: SELECTED_LOAN_FAIL
        })
    }
}


