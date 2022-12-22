const initialState = {
	information: {},
	lights: [],
	nfts: [],
};

const roomReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_ROOM":
			return { ...state, ...action.payload };
		case "CHANGE_ROOM":
			const { no, name } = action.payload;
			let nfts = [...state.nfts];
			nfts[no].name = name;
			return { ...state, nfts };
		default:
			return state;
	}
};

export default roomReducer;
