import {
    SIGN_IN_FAIL,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_REQUEST,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    GET_USER_REQUEST,
    link
} from "../consts.js";
import axios from "axios";

export const signUp = (userData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: SIGN_UP_REQUEST
    })
    const body = userData;
    try {
        const res = await axios.post(`${link}/auth/`, 
            body,
            config
        )
        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SIGN_UP_FAIL
        })
    }
}

export const signIn = (userData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: SIGN_IN_REQUEST
    })
    try {
        const body = userData;
        const res = await axios.post(`${link}/auth/sign_in`, 
            body,
            config
        )
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SIGN_IN_FAIL
        })
        console.log(error)
    }
}

export const GetUserDetail = (token) => async (dispatch) => {
    dispatch({
        type: GET_USER_REQUEST
    })
    try {
        dispatch({
            type: GET_USER_SUCCESS,
            payload: token
        })
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL
        })
    }
}