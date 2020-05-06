import React from 'react';

const NewQuoteButton = (props) => {
  return(
    <button className="NewQuoteButtonStyle" onClick={props.onClick}>New Quote</button>
  )
};

export default NewQuoteButton;