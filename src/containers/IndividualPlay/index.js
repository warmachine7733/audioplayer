import React from "react";
// import EachLangTable from "./EachLangTable";
// // import Image from "../../UI/Image";
import axios from "axios";
import { connect } from "react-redux";

import MusicPlayer from "react-responsive-music-player";
import AudioPlayer from "../../components/AudioPlayer";
import "./index.css";

class IndividualPlay extends React.Component {
  state = {
    file: "",
    title: "",
    artist: [],
    play: true
  };
  handleFile = e => {
    this.setState({
      file: e.target.files[0]
    });
  };
  handleTexts = e => {
    if (e.target.id === "artist") {
      this.setState({
        [e.target.id]: e.target.value.split(",")
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  };
  upload = async () => {
    console.log("this.state.file", this.state.file);
    let file = this.state.file;
    let data = new FormData();
    console.log("state", this.state);
    data.append("file", file);
    data.append("title", this.state.title);
    data.append("artist", this.state.artist);
    let response = await axios.post("http://localhost:4000/upload", data);
    console.log("response", response);
  };
  routeToAudioList = () => {
    console.log("route");
  };

  render() {
    return (
      <>
        <AudioPlayer {...this.props.audio} />
      </>
    );
  }

  componentDidMount() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log("isMobile", isMobile);
  }
}
const mapStateToProps = state => {
  return {
    audio: state.lists.selectedAudio
  };
};

export default connect(mapStateToProps)(IndividualPlay);
