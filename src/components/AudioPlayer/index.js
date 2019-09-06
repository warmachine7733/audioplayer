import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class AudioPlayer extends React.Component {
  render() {
    const { url, title, cover, artist } = this.props.audio;
    const { play, pauseAndPlay, muteAndUnmute, mute } = this.props;
    console.log("props in indi", this.props);

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
              <div className="col-2 timer">0:30</div>
            </div>
            <div className="progressBar">
              <progress className="progress" value="20" max="100"></progress>
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
    console.log(this.refs.player.duration);
  }
  componentDidCatch() {
    console.log(this.refs.player.duration);
  }
  playAndPauseMusic = nextProps => {
    if (nextProps.play) {
      this.refs.player.play();
    } else {
      this.refs.player.pause();
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
