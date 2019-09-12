import React from "react";

const MusicTimeFormatted = props => {
  const formattedTime = `${Math.floor(props.duration / 60)}:${props.duration %
    60}`;
  return <>{formattedTime}</>;
};

export default MusicTimeFormatted;
