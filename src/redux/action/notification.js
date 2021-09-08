import {
    CREATE_NOTIFICATION_FAIL,
    CREATE_NOTIFICATION_REQUEST,
    CREATE_NOTIFICATION_SUCCESS,
    GET_NOTIFICATION_FAIL,
    GET_NOTIFICATION_REQUEST,
    GET_NOTIFICATION_SUCCESS,
    FILTER_NOTIFICATION_FAIL,
    FILTER_NOTIFICATION_REQUEST,
    FILTER_NOTIFICATION_SUCCESS,
    FILTER_BY_ID_NOTIFICATION_FAIL,
    FILTER_BY_ID_NOTIFICATION_REQUEST,
    FILTER_BY_ID_NOTIFICATION_SUCCESS, 
    DELETE_NOTIFICATION_FAIL,
    DELETE_NOTIFICATION_REQUEST,
    DELETE_NOTIFICATION_SUCCESS
} from "../consts";
import axios from "axios";

export const createNotification = (notificationData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: CREATE_NOTIFICATION_REQUEST
    })
    const body = JSON.stringify(notificationData);
    try {
        const res = await axios.post(`${link}/notification`, 
            body,
            config
        )
        dispatch({
            type: CREATE_NOTIFICATION_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_NOTIFICATION_FAIL
        })
    }
}

export const getNotification = (notificationData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: GET_NOTIFICATION_REQUEST
    })
    const body = JSON.stringify(notificationData);
    try {
        const res = await axios.get(`${link}/notification`, 
            body,
            config
        )
        dispatch({
            type: GET_NOTIFICATION_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_NOTIFICATION_FAIL
        })
    }
}

export const filterNotification = (notificationData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_NOTIFICATION_REQUEST
    })
    const body = JSON.stringify(notificationData);
    try {
        const res = await axios.get(`${link}/notification/filter`, 
            body,
            config
        )
        dispatch({
            type: FILTER_NOTIFICATION_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_NOTIFICATION_FAIL
        })
    }
}

export const filterByIdNotification = (notificationData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: FILTER_BY_ID_NOTIFICATION_REQUEST
    })
    const body = JSON.stringify(notificationData);
    try {
        const res = await axios.get(`${link}/notification/one`, 
            body,
            config
        )
        dispatch({
            type: FILTER_BY_ID_NOTIFICATION_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FILTER_BY_ID_NOTIFICATION_FAIL
        })
    }
}

export const deleteNotification = (notificationData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: DELETE_NOTIFICATION_REQUEST
    })
    const body = JSON.stringify(notificationData);
    try {
        const res = await axios.delete(`${link}/notification`, 
            body,
            config
        )
        dispatch({
            type: DELETE_NOTIFICATION_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: DELETE_NOTIFICATION_FAIL
        })
    }
}

