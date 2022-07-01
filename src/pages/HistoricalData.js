import React from "react";
import DisplayCandles1d from "../components/DisplayCandles1d";
import LoadingSpinner from "../components/LoadingSpinner";

const HistoricalData = (props) => {
  return (
    <>
      {Object.keys(props.BTCUSD).length > 0 ? (
        <DisplayCandles1d data={props.BTCUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
      {Object.keys(props.ETHUSD).length > 0 ? (
        <DisplayCandles1d data={props.ETHUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
      {Object.keys(props.DOGEUSD).length > 0 ? (
        <DisplayCandles1d data={props.DOGEUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
      {Object.keys(props.SHIBUSD).length > 0 ? (
        <DisplayCandles1d data={props.SHIBUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
      {Object.keys(props.LTCUSD).length > 0 ? (
        <DisplayCandles1d data={props.LTCUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
    </>
  );
};
export default HistoricalData;
