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
export const handleCurrentTimerAndProgressBar = () => {
  return async (dispatch, getState) => {
    try {
      const currentAudioDuration = getState().individualPlay.selectedAudio.url;
      let currentPlayedTime = getState().individualPlay.currentPlayedTime;
      let play = getState().individualPlay.play;
      // let timer = setInterval(() => {
      //   console.log("play", play);
      //   if (play) {
      //     currentPlayedTime++;
      //     // console.log("x", x);
      //     dispatch({ type: "UPDATE_CURRENT_PLAYED_TIME", currentPlayedTime });
      //     if (currentPlayedTime === currentAudioDuration) {
      //       console.log("fire ");
      //       // dispatch({ type: "STRAT_BROADCAST" });
      //       clearInterval(timer);
      //     }
      //   } else {
      //     console.log("stop timer");
      //   }
      // }, 1000);
    } catch (e) {}
  };
};
