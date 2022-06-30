import React from "react";

const Results = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.setMovies([]);
  };

  let resultsDisplay = <></>;

  if (props.movies.length > 0) {
    resultsDisplay = props.movies.map((item) => {
      return (
        <>
          <img
            key={item.show.id}
            src={item.show.image.medium}
            alt={item.show.name}
          ></img>
          <div key={Math.random}>{item.show.name}</div>
        </>
      );
    });
  }

  return (
    <>
      <button onClick={handleClick}>Back to Search</button>
      <br />
      {resultsDisplay}
      <br />
    </>
  );
};

export default Results;
