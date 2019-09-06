import React from "react";
import "./index.css";

const ListView = props => {
  const { playlist, selectedAudioToPlay } = props;
  const selectedAudioToPlayAndRoute = data => {
    selectedAudioToPlay(data);
    // console.log("data", data);
    props.history.push(`/individualPlay/${data._id}`);
  };
  return (
    <div className="List">
      {playlist.map((each, i) => {
        return (
          <div
            key={i}
            className="container eachAudio"
            onClick={() => selectedAudioToPlayAndRoute(each)}
          >
            <div className="row">
              <div className="col-3">
                <div className="row">
                  <div className="col serialNo">
                    <text>1</text>
                  </div>
                  <div className=" col thumbnail">
                    <img
                      style={{
                        maxHeight: "35px",
                        maxWidth: "35px"
                      }}
                      src="default.jpg"
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </div>

              <div className="col-9 row">
                <div className="col-8 details">
                  <div className="trackName">place unknown</div>
                  <div className="artist">big z</div>
                </div>
                <div className="col-2 options">
                  <div className="duration">4:32</div>
                </div>
                <div className="col-2">
                  <div className="offline">
                    <i className="material-icons">get_app</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
