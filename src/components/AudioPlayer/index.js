import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const AudioPlayer = props => {
  const { url, title, cover, artist } = props;
  console.log("props in indi", props);
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
        {/* <audio
          controls
          // preload
          // style={{ display: "none" }}
          // autoPlay={this.props.autoPlay}
        >
          <source
            src={`http://localhost:4000/${this.props.playlist[0].url}`}
            type="audio/mp3"
          />
          Your browser does not support the audio tag.
        </audio> */}
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
          <div className="timer">0:30</div>
          <div className="progressBar">
            <progress className="progress" value="20" max="100"></progress>
          </div>
          <div className="container controls">
            <div className="row">
              <div className=" col-3 shuffle">
                <i className="material-icons" style={{ fontSize: "50px" }}>
                  shuffle
                </i>
              </div>
              <div className=" col-3 previous">
                <i className="material-icons" style={{ fontSize: "50px" }}>
                  skip_previous
                </i>
              </div>
              <div className="col-3 playAndPause">
                <i
                  className="material-icons"
                  style={{ fontSize: "50px" }}
                  // onClick={this.playMusic}
                >
                  pause
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
};

export default AudioPlayer;
