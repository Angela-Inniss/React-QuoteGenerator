import React, {Component} from 'react';

import Quote from './Quote';
import NewQuoteButton from './NewQuoteButton';
import TwitterButton from './TwitterButton';
import TumblrButton from './TumblrButton';

import './NewQuoteButtonStyle.css';
import './TwitterButtonStyle.css';
import './TumblrButtonStyle.css';
import './Quote.css';


class Card extends Component {
  state =  {
    quotes: ['"A dream doesn\'t become reality through magic; it takes sweat, determination and hard work."',
      '"You GOT this!"','"To be or not to be that is the question"',
      '"With hard work and dedication, anything is possible"',
      '"Think happy, be Happy"'
      ,'"You cant spell Angela without an Angel"',
      '"Just do it"', '"The world is your oyster"',
      '"Try and you shall succeed"',
      '"Practise makes perfect"'],
    selectedIndex: 1
  };

  changeQuoteHandler = (event) => {
  // // below creates a new array formed with ... spread operator as we don't want to manipulate original quote object
  // // we want to create a new one and manipulate that.
  //   const quotes = [...this.state.quotes];
  // // remove a quote from original array and return value
  //   const removedQuote = quotes.shift();
  //   // console.log({removedQuote}); // returns removed quote
  //   // push the removed quote into the quotes array at the end
  //   quotes.push(removedQuote);{
    const quotes = [...this.state.quotes];
    const arrayIndex = Math.floor(Math.random() * quotes.length);//Returns us an element of the array at the random index, just like we wanted. Gives me a random number.
    // console.log(arrayIndex);
    // setting new state to quotes? new quotes array line 17?
     this.setState({ //
       quotes: quotes,
       selectedIndex: arrayIndex // gives us a random number which ill pass to the quote componenent below.
     })
  };
//justs needs to know about the integer not the quote.

  twitterButtonHandler = (event) => {
    const quotes = [...this.state.quotes];
    const removedQuote = quotes.shift();
    // console.log({removedQuote}); // returns removed quote
    const pushTwitter = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(removedQuote) + ' @Angieyaya';
    window.open(pushTwitter);
  };

 tumblrButtonHandler = () => {
  const quotes = [...this.state.quotes];
   const linkTumblr = 'https://www.tumblr.com';  window.open(linkTumblr);
 };

  render(){
    // just checking what quotes brings back
    // console.log(this.state.quotes);
    // console.log(this.state.selectedIndex)

    return (
      <div className="Card">
        <div>
          <h2>Random Quote Generator</h2>
          {/*<Quote quote="this a hard coded quote"/>*/}
          <Quote className="QuoteStyle" quote={this.state.quotes[this.state.selectedIndex]}/>
        </div>
        <div className="Flex">
          <div>
            <TwitterButton onClick={this.twitterButtonHandler}/>
            <TumblrButton onClick={this.tumblrButtonHandler} />
          </div>
          <div>
            <NewQuoteButton onClick={this.changeQuoteHandler}/>
          </div>
        </div>

      </div>
    )
  }
};


export default Card;

