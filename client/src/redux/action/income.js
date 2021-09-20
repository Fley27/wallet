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
    link,
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
import axios from "axios";

export const getTotalAmountTheLastSixMonthIncome = (incomeData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: TOTAL_AMOUNT_OF_THE_LAST_SIX_MONTH_BY_CURRENCY_REQUEST
    })
    const body = incomeData;
    try {
        const res = await axios.post(`${link}/income/sum-last-six-month`, 
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

export const getTotalAmountByCurrencyIncome = (incomeData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_TOTAL_AMOUNT_INCOME_BY_CURRENCY_REQUEST
    })
    const body = incomeData;
    try {
        const res = await axios.post(`${link}/income/sum-by-currency`, 
            body,
            config
        )
        dispatch({
            type: FILTER_TOTAL_AMOUNT_INCOME_BY_CURRENCY_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_TOTAL_AMOUNT_INCOME_BY_CURRENCY_FAIL
        })
    }
}

export const createIncome = (incomeData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: CREATE_INCOME_REQUEST
    })
    const body = incomeData;
    try {
        const res = await axios.post(`${link}/income`, 
            body,
            config
        )
        dispatch({
            type: CREATE_INCOME_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_INCOME_FAIL
        })
    }
}

export const getIncome = (incomeData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: GET_INCOME_REQUEST
    })
    const body = incomeData;
    try {
        const res = await axios.post(`${link}/income/all`, 
            body,
            config
        )
        dispatch({
            type: GET_INCOME_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_INCOME_FAIL
        })
        alert(error)
    }
}

export const filterIncome = (incomeData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_INCOME_REQUEST
    })
    const body = JSON.stringify(incomeData);
    try {
        const res = await axios.get(`${link}/income/filter`, 
            body,
            config
        )
        dispatch({
            type: FILTER_INCOME_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_INCOME_FAIL
        })
    }
}

export const filterByIdIncome = (incomeData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_BY_ID_INCOME_REQUEST
    })
    const body = JSON.stringify(incomeData);
    try {
        const res = await axios.get(`${link}/income/one`, 
            body,
            config
        )
        dispatch({
            type: FILTER_BY_ID_INCOME_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_BY_ID_INCOME_FAIL
        })
    }
}

export const deleteIncome = (incomeData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: DELETE_INCOME_REQUEST
    })
    const body = JSON.stringify(incomeData);
    try {
        const res = await axios.delete(`${link}/income`, 
            body,
            config
        )
        dispatch({
            type: DELETE_INCOME_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: DELETE_INCOME_FAIL
        })
    }
}

export const selectIncome = (incomeData) => async (dispatch) => {
    dispatch({
        type: SELECTED_INCOME_REQUEST
    })
    try {
        dispatch({
            type: SELECTED_INCOME_SUCCESS,
            payload: incomeData
        })
    } catch (error) {
        dispatch({
            type: SELECTED_INCOME_FAIL
        })
    }
}


