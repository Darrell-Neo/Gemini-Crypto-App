import React from "react";
import DisplayCandles1d from "../components/DisplayCandles1d";
import LoadingSpinner from "../components/LoadingSpinner";

const PageSHIBUSD = (props) => {
  return (
    <>
      {Object.keys(props.SHIBUSD).length > 0 ? (
        <DisplayCandles1d data={props.SHIBUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default PageSHIBUSD;
