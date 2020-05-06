import React, {useState} from 'react';

import Quote from './Quote';
import NewQuoteButton from './NewQuoteButton';
import TwitterButton from './TwitterButton';
import TumblrButton from './TumblrButton';

import './NewQuoteButtonStyle.css';
import './TwitterButtonStyle.css';
import './TumblrButtonStyle.css';
import './Quote.css';


const card = () => {
  const [quotes, setQuotes] = useState(['"A dream doesn\'t become reality through magic; it takes sweat, determination and hard work."',
    '"You GOT this!"','"To be or not to be that is the question"',
    '"With hard work and dedication, anything is possible"',
    '"Think happy, be Happy"'
    ,'"You cant spell Angela without an Angel"',
    '"Just do it"', '"The world is your oyster"',
    '"Try and you shall succeed"',
    '"Practise makes perfect"']);


  const [selectedIndex, setSelectedIndex] =  useState(1);

  const changeQuoteHandler = () => {
    const selectedIndex = Math.floor(Math.random() * quotes.length);// Returns us an element of the array at the random index, just like we wanted. Gives me a random number.
     setSelectedIndex(selectedIndex); // sets the selectedIndex state to the random number above.

    setQuotes([...quotes]);
  };


 const twitterButtonHandler = () => {
    const quotes = [...quotes];
    const removedQuote = quotes.shift();
    const pushTwitter = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(removedQuote) + ' @Angieyaya';
    window.open(pushTwitter);
  };

const tumblrButtonHandler = () => {
  const quotes = [...quotes];
   const linkTumblr = 'https://www.tumblr.com';  window.open(linkTumblr);
 };

    return (
      <div className="Card">
        <div>
          <h2>Random Quote Generator</h2>
          <Quote className="QuoteStyle" quote={quotes[selectedIndex]}/>
        </div>
        <div className="Flex">
          <div>
            <TwitterButton onClick={twitterButtonHandler}/>
            <TumblrButton onClick={tumblrButtonHandler} />
          </div>
          <div>
            <NewQuoteButton onClick={changeQuoteHandler}/>
          </div>
        </div>

      </div>
    )
};


export default card;
