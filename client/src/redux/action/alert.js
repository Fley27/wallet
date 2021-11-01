import { SET_ALERT, REMOVE_ALERT } from '../consts';

export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
	const id = 2;
	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, id }
	});
	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};