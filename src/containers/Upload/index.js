import React from "react";
import axios from "axios";

class Upload extends React.Component {
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
  render() {
    return (
      <div>
        <input type="file" id="file" onChange={this.handleFile} />
        <input
          type="text"
          placeholder="title"
          id="title"
          onChange={this.handleTexts}
        />
        <input
          type="text"
          placeholder="artist"
          id="artist"
          onChange={this.handleTexts}
        />
        <button onClick={this.upload}>upload</button>
      </div>
    );
  }
}

export default Upload;
