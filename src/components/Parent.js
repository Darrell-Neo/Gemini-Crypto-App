import React, { useEffect, useState, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Parent = () => {
  const queryInputRef = useRef();
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=CGH1htcOhWPqpkLFt0DCoBytLWULOh5l&q=";

  const [submittedUrl, setSubmittedUrl] = useState(url + "hello");

  const [post, setPost] = useState({ url: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      console.log(data);
      console.log(data.data[0].images.original.url);

      setPost({ url: data.data[0].images.original.url });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPost(submittedUrl);
  }, [submittedUrl]);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    // const queryUrl = url + queryInputRef.current.value;
    // fetchPost(queryUrl);
    setSubmittedUrl(url + queryInputRef.current.value);
  };

  let content = "";

  if (post) {
    content = (
      <>
        <img src={post.url} alt=""></img>
      </>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <section>
        <form className="container" onSubmit={handleFormSubmission}>
          <div className="row">
            <div className="col-sm-5">
              <label htmlFor="query">
                <strong>Giphy</strong>
              </label>
            </div>
            <div className="col-sm-7">
              <input id="query" type="text" ref={queryInputRef} />
            </div>
          </div>
          <button>Submit</button>
          <h2>{submittedUrl}</h2>
        </form>
      </section>
      <br />
      <section>{content}</section>
    </>
  );
};

export default Parent;
