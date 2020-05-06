import React from 'react';

const Quote = (props) => {
  return(
      <p>{props.quote}</p>
  )
};

export default Quote;

// destructuring way ...
// import React from 'react';
//
// const Quote = ({quote}) => {
//   return(
//     <p>{quote}</p>
//   )
// };
//
// export default Quote;