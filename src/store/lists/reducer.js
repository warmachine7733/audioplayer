const initialState = { playlist: [], selectedAudio: null };
export const lists = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_MUSICS":
      return {
        ...state,
        playlist: action.data
      };
    case "STORE_SELECTED_AUDIO":
      return {
        ...state,
        selectedAudio: action.data
      };
    default:
      return state;
  }
};
