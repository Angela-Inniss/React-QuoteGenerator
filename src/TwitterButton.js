import React from 'react';

const TwitterButton = (props) => {
  return(
    <button className="TwitterButtonStyle" onClick={props.onClick}>Twitter</button>
  )
};

export default TwitterButton;