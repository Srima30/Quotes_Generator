import React from "react";

const Quote = ({ quote, author }) => {
  return (
    <center><div>
      <h2>{quote}</h2>
      <p>{author}</p>
    </div></center>
  );
};

export default Quote;