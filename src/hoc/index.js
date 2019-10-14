import React from "react";
import Audio

const Hoc = props => {

  const TagName = components[props.tag || "foo"];
  return <TagName {...props} />;
};

export default Hoc;
