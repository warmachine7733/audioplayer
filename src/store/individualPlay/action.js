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
      // let data = { id };
      const response = await axios.post(requestUrl, { id });

      const data = response.data[0];
      dispatch({ type: "STORE_SELECTED_AUDIO", data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const pauseAndPlay = () => {
  return async dispatch => {
    try {
      dispatch({ type: "PAUSE_AND_PLAY" });
      dispatch(handleCurrentTimerAndProgressBar());
    } catch (e) {
      console.log(e);
    }
  };
};
export const muteAndUnmute = () => {
  return {
    type: "MUTE_AND_UNMUTE"
  };
};
export const handleCurrentTimerAndProgressBar = data => {
  return async (dispatch, getState) => {
    try {
      const currentAudioDuration = getState().individualPlay.selectedAudio.url;

      let play = getState().individualPlay.play;
      console.log("play", data);
  
      // }, 1000);
      let timer = setInterval(() => {
        let currentPlayedTime = getState().individualPlay.currentPlayedTime
        
        if (currentPlayedTime === currentAudioDuration) {
          // console.log("fire ");

          clearInterval(timer);
        } else {
          let modTime = currentPlayedTime + 1;

          dispatch({ type: "UPDATE_CURRENT_PLAYED_TIME", modTime });
        }
      }, 1000);
    } catch (e) {}
  };
};
