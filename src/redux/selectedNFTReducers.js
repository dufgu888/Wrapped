const initialState = {
  no: -1,
};

const selectedNFTReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_NFT":
      return { ...state, no: action.payload.no };

    case "SELECT_NONE_NFT":
      return {
        ...initialState,
        no: -1,
      };
    default:
      return state;
  }
};

export default selectedNFTReducer;
