import React, { useState, useEffect } from "react";
import Results from "./components/Results";
import Search from "./components/Search";
import Websocket from "./components/Websocket";
import DisplaySampleChart from "./components/DisplaySampleChart";
import DisplayETHUSD1d from "./components/DisplayETHUSD1d";
import DisplayBTCUSD1d from "./components/DisplayBTCUSD1d";
import DisplayCandles1d from "./components/DisplayCandles1d";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [movies, setMovies] = useState([]);
  const [BTCUSD, setBTCUSD] = useState({});
  const [ETHUSD, setETHUSD] = useState({});
  const [DOGEUSD, setDOGEUSD] = useState({});
  const [SHIBUSD, setSHIBUSD] = useState({});
  const [LTCUSD, setLTCUSD] = useState({});

  return (
    <>
      <h1>Gemini Crypto App</h1>
      {
        <Websocket
          BTCUSD={BTCUSD}
          setBTCUSD={setBTCUSD}
          ETHUSD={ETHUSD}
          setETHUSD={setETHUSD}
          DOGEUSD={DOGEUSD}
          setDOGEUSD={setDOGEUSD}
          SHIBUSD={SHIBUSD}
          setSHIBUSD={setSHIBUSD}
          LTCUSD={LTCUSD}
          setLTCUSD={setLTCUSD}
        />
      }
      <br />
      {/* {<DisplaySampleChart />} */}
      {<DisplayBTCUSD1d />}
      <br />
      {<DisplayETHUSD1d />}
      <br />
      {Object.keys(BTCUSD).length > 0 ? (
        <DisplayCandles1d data={BTCUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
      {Object.keys(ETHUSD).length > 0 ? (
        <DisplayCandles1d data={ETHUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
      {Object.keys(DOGEUSD).length > 0 ? (
        <DisplayCandles1d data={DOGEUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
      {Object.keys(SHIBUSD).length > 0 ? (
        <DisplayCandles1d data={SHIBUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
      {Object.keys(LTCUSD).length > 0 ? (
        <DisplayCandles1d data={LTCUSD} />
      ) : (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <br />
    </>
  );
}

export default App;
