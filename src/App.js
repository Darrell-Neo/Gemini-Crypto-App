import React, { useState, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Websocket from "./components/Websocket";
import PageBTCUSD from "./pages/PageBTCUSD";
import PageETHUSD from "./pages/PageETHUSD";
import PageDOGEUSD from "./pages/PageDOGEUSD";
import PageSHIBUSD from "./pages/PageSHIBUSD";
import PageLTCUSD from "./pages/PageLTCUSD";

const Home = React.lazy(() => import("./pages/Home"));
const HistoricalData = React.lazy(() => import("./pages/HistoricalData"));
const Trade = React.lazy(() => import("./pages/Trade"));

const geminiSocket = new WebSocket("wss://api.gemini.com/v2/marketdata");

function App() {
  const [BTCUSD, setBTCUSD] = useState({});
  const [ETHUSD, setETHUSD] = useState({});
  const [DOGEUSD, setDOGEUSD] = useState({});
  const [SHIBUSD, setSHIBUSD] = useState({});
  const [LTCUSD, setLTCUSD] = useState({});
  const [BTCUSDtrade, setBTCUSDtrade] = useState(0);
  const [ETHUSDtrade, setETHUSDtrade] = useState(0);
  const [DOGEUSDtrade, setDOGEUSDtrade] = useState(0);
  const [SHIBUSDtrade, setSHIBUSDtrade] = useState(0);
  const [LTCUSDtrade, setLTCUSDtrade] = useState(0);

  const stopWebSocket = () => {
    console.log("Stopping web socket...");
    geminiSocket.close();
  };

  return (
    <>
      <div className="row">
        <div className="col-md-9">
          <h1>Gemini Crypto App by Dneo</h1>
        </div>
        <div className="col-md-3">
          <button className="button-81" onClick={stopWebSocket}>
            Stop Live Updates
          </button>
        </div>
      </div>
      <NavBar />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              path="/home"
              element={
                <Home
                  BTCUSDtrade={BTCUSDtrade}
                  ETHUSDtrade={ETHUSDtrade}
                  DOGEUSDtrade={DOGEUSDtrade}
                  SHIBUSDtrade={SHIBUSDtrade}
                  LTCUSDtrade={LTCUSDtrade}
                />
              }
            />
            <Route
              path="/historical-data"
              element={
                <HistoricalData
                  BTCUSD={BTCUSD}
                  ETHUSD={ETHUSD}
                  DOGEUSD={DOGEUSD}
                  SHIBUSD={SHIBUSD}
                  LTCUSD={LTCUSD}
                />
              }
            />
            <Route path="/trade" element={<Trade />} />
            <Route path="/btc-usd" element={<PageBTCUSD BTCUSD={BTCUSD} />} />
            <Route path="/eth-usd" element={<PageETHUSD ETHUSD={ETHUSD} />} />
            <Route
              path="/doge-usd"
              element={<PageDOGEUSD DOGEUSD={DOGEUSD} />}
            />
            <Route
              path="/shib-usd"
              element={<PageSHIBUSD SHIBUSD={SHIBUSD} />}
            />
            <Route path="/ltc-usd" element={<PageLTCUSD LTCUSD={LTCUSD} />} />
          </Routes>
        </Suspense>
      </main>
      {
        <Websocket
          geminiSocket={geminiSocket}
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
          setBTCUSDtrade={setBTCUSDtrade}
          setETHUSDtrade={setETHUSDtrade}
          setDOGEUSDtrade={setDOGEUSDtrade}
          setSHIBUSDtrade={setSHIBUSDtrade}
          setLTCUSDtrade={setLTCUSDtrade}
        />
      }
    </>
  );
}

export default App;
