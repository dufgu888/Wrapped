export const selectNFT = (payload) => async (dispatch) => {
  dispatch({
    type: "SELECT_NFT",
    payload: payload,
  });
};

export const selectNoneNFT = () => async (dispatch) => {
  dispatch({
    type: "SELECT_NONE_NFT",
  });
};
