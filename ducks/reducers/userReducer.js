import axios from "axios";
import { START_SESSION, GET_USER_SESSION, SAVE_SESSION } from "../actionTypes";

const initialState = { user: { loggedIn: false } };

export const getUserSession = () => {
	return {
		type: GET_USER_SESSION,
		payload: axios.get("/api/user").then((res) => res.data),
	};
};

export const startSession = (email, password) => {
	return {
		type: START_SESSION,
		payload: axios
			.post("http://localhost:4068/api/login", {
				email: email,
				password: password,
			})
			.then((res) => res.data),
	};
};

export const saveSession = (
	name,
	email,
	id,
	loggedIn,
	customerId,
	subscribed
) => {
	return {
		type: SAVE_SESSION,
		payload: {
			name: name,
			email: email,
			id: id,
			loggedIn: loggedIn,
			customerId: customerId,
			subscribed: subscribed,
		},
	};
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${SAVE_SESSION}`:
			return { ...state, user: payload };

		default:
			return state;
	}
}
