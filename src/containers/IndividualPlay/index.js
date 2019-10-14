import React from "react";
// import EachLangTable from "./EachLangTable";
// // import Image from "../../UI/Image";
import axios from "axios";
import { connect } from "react-redux";

import MusicPlayer from "react-responsive-music-player";
import AudioPlayer from "../../components/AudioPlayer";
import {
  getSelectedAudioFromServer,
  pauseAndPlay,
  muteAndUnmute,
  handleCurrentTimerAndProgressBar
} from "../../store/individualPlay/action";
import "./index.css";

class IndividualPlay extends React.Component {
  routeToAudioList = () => {
    console.log("route");
  };

  render() {
    return <>{this.props.audio ? <AudioPlayer {...this.props} /> : ""}</>;
  }

  componentDidMount() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // console.log("isMobile", isMobile, this.props);
    this.props.getSelectedAudioFromServer(this.props.match.params.id);
  }
}
const mapStateToProps = state => {
  return {
    audio: state.individualPlay.selectedAudio,
    play: state.individualPlay.play,
    mute: state.individualPlay.mute,
    currentPlayedTime: state.individualPlay.currentPlayedTime
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSelectedAudioFromServer: id => dispatch(getSelectedAudioFromServer(id)),
    pauseAndPlay: () => dispatch(pauseAndPlay()),
    muteAndUnmute: () => dispatch(muteAndUnmute()),
    handleCurrentTimerAndProgressBar: data =>
      dispatch(handleCurrentTimerAndProgressBar(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualPlay);
