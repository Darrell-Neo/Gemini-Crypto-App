import React from "react";
import DisplayCandles1d from "../components/DisplayCandles1d";
import LoadingSpinner from "../components/LoadingSpinner";

const PageLTCUSD = (props) => {
  return (
    <>
      {Object.keys(props.LTCUSD).length > 0 ? (
        <DisplayCandles1d data={props.LTCUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default PageLTCUSD;
