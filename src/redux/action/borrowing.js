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
    DELETE_BORROWING_SUCCESS
} from "../consts";
import axios from "axios";

export const createBorrowing = (borrowingData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: CREATE_BORROWING_REQUEST
    })
    const body = JSON.stringify(borrowingData);
    try {
        const res = await axios.post(`${link}/borrowing`, 
            body,
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
    const body = JSON.stringify(borrowingData);
    try {
        const res = await axios.get(`${link}/borrowing`, 
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

