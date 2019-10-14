const initialState = {
  selectedAudio: null,
  play: true,
  mute: false,
  currentPlayedTime: 0
};
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
    case "UPDATE_CURRENT_PLAYED_TIME":
      return {
        ...state,
        currentPlayedTime: action.modTime
      };
    default:
      return state;
  }
};
