import React, { useState, useEffect } from "react";

export default function Quotes() {
  const [quoteData, setQuoteData] = useState([]);
  const [nextQuote, setNextQuote] = useState(false);
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8537977f5emshc7003a883625c36p10ccb2jsn600cd7921797",
        "X-RapidAPI-Host": "marvel-quote-api.p.rapidapi.com",
      },
    };

    fetch("https://marvel-quote-api.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => {
        setQuoteData(response);
        setAuthor(response.Speaker);
        setDesc(response.Quote);
        setMovie(response.Title);
      })
      .catch((err) => console.error(err));
  }, [nextQuote]);

  function handleClick() {
    setNextQuote((prevValue) => !prevValue);
    setAuthor(quoteData.Speaker);
    setDesc(quoteData.Quote);
    setMovie(quoteData.Title);
  }

  return (
    <div className="quotes">
      <div className="quotes--container">
        <div className="quotes--content">
          <img
            className="quote--img"
            src="../images/quote.png"
            alt="quote symbol"
          ></img>
          <p className="quote-desc">{desc}</p>
          <p className="quote-author">{author}</p>
          <p className="quote-movie">{movie}</p>
          <p>
            If you are not seeing any quotes above, then the API must be down.
            Check this for more details:
          </p>
          <p>
            <a href="https://rapidapi.com/kyledeguzmanx/api/marvel-quote-api">
              API Link
            </a>
          </p>
          <p>
            <a href="https://marvel-quote-api.p.rapidapi.com/">Fetch Link</a>
          </p>
          {/* {errorMessage ? <p>{errorMessage}</p> : null} */}
          <button className="next-quote" onClick={handleClick}>
            Next-Quote
          </button>
        </div>
      </div>
    </div>
  );
}
