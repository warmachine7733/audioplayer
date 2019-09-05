import React from "react";
import ListView from "../../components/ListView/";
import { connect } from "react-redux";
import { getPlaylist, selectedAudioToPlay } from "../../store/lists/action";

class List extends React.Component {
  render() {
    return (
      <div>
        <ListView {...this.props} />
      </div>
    );
  }
  componentDidMount() {
    this.props.getPlaylist();
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
