import React from "react";
import DisplayCandles1d from "../components/DisplayCandles1d";
import LoadingSpinner from "../components/LoadingSpinner";

const PageDOGEUSD = (props) => {
  return (
    <>
      {Object.keys(props.DOGEUSD).length > 0 ? (
        <DisplayCandles1d data={props.DOGEUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default PageDOGEUSD;
