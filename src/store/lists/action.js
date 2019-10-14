import axios from "axios";

export const getPlaylist = () => {
  return async dispatch => {
    try {
      let streamServer = "http://localhost:4000";
      const requestUrl = `${streamServer}/getAudio/?next=6`;
      const response = await axios.get(requestUrl);
      let data = response.data;
      dispatch({ type: "STORE_MUSICS", data });
      console.log(response);
      console.log("get the list");
    } catch (e) {
      console.log("error getting list");
    }
  };
};
