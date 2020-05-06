import React from 'react';

const TumblrButton = (props) => {
  return(
    <button className="TumblrButtonStyle" onClick={props.onClick}> Tumblr</button>
  )
};

export default TumblrButton;