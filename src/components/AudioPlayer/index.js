import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import MusicTimeFormatted from "../../commons/MusicTimeFormatted";

// class CustomPlayer extends React.Component {
//   components = {
//     feed: Feed,
//     entertainment: Entertainment,
//     news: News,
//     games: Games,
//     payments: Payments
//   };
//   render() {
//     const TagName = this.components[this.props.tag || "foo"];
//     return <TagName {...this.props} />;
//   }
// }

class AudioPlayer extends React.Component {
  state = {
    seekedDuration: 0
  };
  changeProgress = e => {
    // console.log("ref", this.refs.progressBar.getBoundingClientRect().width);

    // console.log("fired", e.clientX);
    let audioDuration = this.props.audio.duration;
    let widthOfSeeker = this.refs.progressBar.getBoundingClientRect().width;
    let positionClicked = e.clientX;
    let seekedDuration = Math.round(
      (audioDuration / widthOfSeeker) * positionClicked
    );
    console.log("go to", seekedDuration, "ll", this.props.currentPlayedTime);
    this.props.handleCurrentTimerAndProgressBar({ seekedDuration });
    this.refs.player.currentTime = seekedDuration;
    this.setState({ seekedDuration });
  };
  render() {
    const { url, title, cover, artist, duration } = this.props.audio;
    const {
      play,
      pauseAndPlay,
      muteAndUnmute,
      mute,
      handleCurrentTimerAndProgressBar,
      currentPlayedTime
    } = this.props;
    // console.log("props in indi", this.props);

    return (
      <div>
        <Link to="/" style={{ color: "black" }}>
          <i
            style={{ position: "absolute", top: "1.5%", left: "2%" }}
            className="material-icons"
          >
            keyboard_backspace
          </i>
        </Link>

        <div className="musicPlayer">
          <audio
            controls
            preload="metadata"
            ref="player"
            // style={{ display: "none" }}
            autoPlay
          >
            <source src={`http://localhost:4000/${url}`} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
          <div className="thumbnail">
            <img
              style={{ maxWidth: "100%", maxHeight: "550px" }}
              src="default.jpg"
              alt="thumbnail"
            />
          </div>
          <div className="details">
            <h3>{title}</h3>
            <h5>{artist}</h5>
          </div>
          <div className="timerAndProgress">
            <div className="row" style={{ position: "relative", left: "15px" }}>
              <i className="col-2 material-icons" onClick={muteAndUnmute}>
                {mute ? "volume_off" : "volume_up"}
              </i>
              <div className="col-2 timer">
                <MusicTimeFormatted duration={this.state.seekedDuration} />/
                <MusicTimeFormatted duration={duration} />
              </div>
            </div>
            <div className="progressBar">
              <progress
                ref="progressBar"
                className="progress"
                value={Math.floor(currentPlayedTime)}
                // value={
                //   this.state.seekedDuration ? this.state.seekedDuration : 0
                // }
                max={duration}
                onClick={e => this.changeProgress(e)}
                onDrag={e => this.changeProgress(e)}
              ></progress>
            </div>
            <div className="container controls">
              <div className="row">
                <div className=" col-3 shuffle">
                  <i className="material-icons" style={{ fontSize: "40px" }}>
                    shuffle
                  </i>
                </div>
                <div className=" col-3 previous">
                  <i className="material-icons" style={{ fontSize: "40px" }}>
                    skip_previous
                  </i>
                </div>
                <div className="col-3 playAndPause">
                  <i
                    className="material-icons"
                    style={{ fontSize: "40px" }}
                    onClick={pauseAndPlay}
                  >
                    {play ? "pause" : "play_arrow"}
                  </i>
                </div>
                <div className="col-3 ext">
                  <i className="material-icons" style={{ fontSize: "50px" }}>
                    skip_next
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.handleCurrentTimerAndProgressBar({
      seekedDuration: this.state.seekedDuration
    });
  }

  playAndPauseMusic = nextProps => {
    if (nextProps.play) {
      this.refs.player.play();
      // console.log("time", this.refs.player.currentTime);
      //
    } else {
      this.refs.player.pause();
      // console.log("time", this.refs.player.currentTime);
    }
  };
  muteAndUnmuteMusic = nextProps => {
    this.refs.player.muted = nextProps.mute;
  };
  shouldComponentUpdate(nextProps) {
    this.playAndPauseMusic(nextProps);
    this.muteAndUnmuteMusic(nextProps);

    return true;
  }
}

export default AudioPlayer;
