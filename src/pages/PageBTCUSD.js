import React from "react";
import DisplayCandles1d from "../components/DisplayCandles1d";
import LoadingSpinner from "../components/LoadingSpinner";

const PageBTCUSD = (props) => {
  return (
    <>
      {Object.keys(props.BTCUSD).length > 0 ? (
        <DisplayCandles1d data={props.BTCUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default PageBTCUSD;
