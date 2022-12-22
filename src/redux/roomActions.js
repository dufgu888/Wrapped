export const addRoom = (payload) => async (dispatch) => {
	dispatch({
		type: "ADD_ROOM",
		payload: payload,
	});
};

export const changeRoom = (payload) => async (dispatch) => {
	dispatch({
		type: "CHANGE_ROOM",
		payload: payload,
	});
};
