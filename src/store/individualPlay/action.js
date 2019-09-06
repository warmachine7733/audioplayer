import axios from "axios";
export const selectedAudioToPlay = data => {
  return dispatch => {
    try {
      // console.log("fired", data);
      dispatch({ type: "STORE_SELECTED_AUDIO", data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getSelectedAudioFromServer = id => {
  return async dispatch => {
    try {
      console.log("id", id);
      let streamServer = "http://localhost:4000";
      const requestUrl = `${streamServer}/getSelectedAudio/`;
      const response = await axios.post(requestUrl, id);
      const data = response.data[0];
      dispatch({ type: "STORE_SELECTED_AUDIO", data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const pauseAndPlay = () => {
  return {
    type: "PAUSE_AND_PLAY"
  };
};
export const muteAndUnmute = () => {
  return {
    type: "MUTE_AND_UNMUTE"
  };
};
