import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedUrl(url + query);
  };

  const url = "https://api.tvmaze.com/search/shows?q=";
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [firstLoad, setFirstload] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataHasArrived, setDataHasArrived] = useState(0);

  const fetchData = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      console.log(data);

      props.setMovies(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(submittedUrl);
  }, [submittedUrl]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="query"
          type="text"
          onChange={handleQueryChange}
          value={query}
          defaultValue="Enter a show name..."
        ></input>
        <button type="submit" onSubmit={handleSubmit}>
          Search
        </button>
      </form>
      {isLoading ? (
        <div className="centered">
          <LoadingSpinner />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Search;
