import React, { useState } from "react";
import Quote from "./Quote";
import quotes from "./quotes";
//import {FiTwitter} from "react-icons/fi";
import twitter from './twitter.jpeg'
import instagram from './instagram.jpeg'
const Quotegen = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleClick = () => {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));
  };

  return (
    <center><div id="test">
      <Quote quote={quotes[quoteIndex].quote} author={quotes[quoteIndex].author} />
      <button onClick={handleClick} id="box">Generate Quote</button>
      <br></br>

      <a id="tweet-quote" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank">
            <img src={twitter} alt="Twitter icon" width="30" height="30" />Twitter</a>
            <a id="insta" href="https://www.instagram.com/accounts/login/" target="_blank">
            <img src={instagram} alt="Insta icon" width="30" height="30"/>Instagram</a>
      
    </div></center>
  );
};

export default Quotegen;