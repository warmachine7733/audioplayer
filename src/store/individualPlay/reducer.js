const initialState = { selectedAudio: null, play: true, mute: false };
export const individualPlay = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_SELECTED_AUDIO":
      return {
        ...state,
        selectedAudio: action.data
      };
    case "PAUSE_AND_PLAY":
      return {
        ...state,
        play: !state.play
      };
    case "MUTE_AND_UNMUTE":
      return {
        ...state,
        mute: !state.mute
      };
    default:
      return state;
  }
};
