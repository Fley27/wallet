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
    link,
} from "../consts";
import axios from "axios";

export const createExpense = (expenseData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: CREATE_EXPENSE_REQUEST
    })
    const body = expenseData;
    try {
        const res = await axios.post(`${link}/expense`, 
            body,
            config
        )
        dispatch({
            type: CREATE_EXPENSE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_EXPENSE_FAIL
        })
    }
}

export const getExpense = (expenseData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: GET_EXPENSE_REQUEST
    })
    const body = expenseData;
    try {
        const res = await axios.post(`${link}/expense/all`, 
            body,
            config
        )
        dispatch({
            type: GET_EXPENSE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_EXPENSE_FAIL
        })
    }
}

export const filterExpense = (expenseData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_EXPENSE_REQUEST
    })
    const body = expenseData;
    try {
        const res = await axios.get(`${link}/expense/filter`, 
            body,
            config
        )
        dispatch({
            type: FILTER_EXPENSE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_EXPENSE_FAIL
        })
    }
}

export const filterByIdExpense = (expenseData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_BY_ID_EXPENSE_REQUEST
    })
    const body = expenseData;
    try {
        const res = await axios.get(`${link}/expense/one`, 
            body,
            config
        )
        dispatch({
            type: FILTER_BY_ID_EXPENSE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_BY_ID_EXPENSE_FAIL
        })
    }
}

export const deleteExpense = (expenseData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: DELETE_EXPENSE_REQUEST
    })
    const body = expenseData;
    try {
        const res = await axios.delete(`${link}/expense`, 
            body,
            config
        )
        dispatch({
            type: DELETE_EXPENSE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: DELETE_EXPENSE_FAIL
        })
    }
}

export const selectExpense = (expenseData) => async (dispatch) => {
    dispatch({
        type: SELECTED_EXPENSE_REQUEST
    })
    try {
        dispatch({
            type: SELECTED_EXPENSE_SUCCESS,
            payload: expenseData
        })
    } catch (error) {
        dispatch({
            type: SELECTED_EXPENSE_FAIL
        })
    }
}

