import React from "react";
import ListView from "../../components/ListView/";
import { connect } from "react-redux";
import { getPlaylist } from "../../store/lists/action";
import { selectedAudioToPlay } from "../../store/individualPlay/action";

class List extends React.Component {
  render() {
    return (
      <div>
        <ListView {...this.props} />
      </div>
    );
  }
  componentDidMount() {
    if (this.props.playlist.length === 0) this.props.getPlaylist();
  }
}

const mapStateToProps = state => {
  return {
    playlist: state.lists.playlist
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPlaylist: () => dispatch(getPlaylist()),
    selectedAudioToPlay: data => dispatch(selectedAudioToPlay(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
