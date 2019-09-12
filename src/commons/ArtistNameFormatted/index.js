import React from "react";

const ArtistNameFormatted = props => {
  const { artist } = props;
  return <>{artist.toString()}</>;
};

export default ArtistNameFormatted;
