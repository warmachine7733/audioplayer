const initialState = { playlist: [] };
export const lists = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_MUSICS":
      return {
        ...state,
        playlist: action.data
      };
    default:
      return state;
  }
};
