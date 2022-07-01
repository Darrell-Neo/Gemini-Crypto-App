import React from "react";
import { NavLink } from "react-router-dom";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const Home = (props) => {
  return (
    <>
      <div className="container">
        <NavLink to="/btc-usd">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-1">
              <img
                src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/btc.svg"
                alt=""
              ></img>
            </div>
            <div className="col-md-3">Bitcoin(BTC)</div>
            <div className="col-md-2">
              {"$" + numberWithCommas(props.BTCUSDtrade)}
            </div>
          </div>
        </NavLink>
        <NavLink to="/eth-usd">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-1">
              <img
                src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/eth.svg"
                alt=""
              ></img>
            </div>
            <div className="col-md-3">Ethereum(ETH)</div>
            <div className="col-md-2">
              {"$" + numberWithCommas(props.ETHUSDtrade)}
            </div>
          </div>
        </NavLink>
        <NavLink to="/doge-usd">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-1">
              <img
                src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/doge.svg"
                alt=""
              ></img>
            </div>
            <div className="col-md-3">Dogecoin(DOGE)</div>
            <div className="col-md-2">
              {"$" + numberWithCommas(props.DOGEUSDtrade)}
            </div>
          </div>
        </NavLink>
        <NavLink to="/shib-usd">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-1">
              <img
                src="https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=022"
                alt=""
              ></img>
            </div>
            <div className="col-md-3">Shiba Inu(SHIB)</div>
            <div className="col-md-2">
              {"$" + numberWithCommas(props.SHIBUSDtrade)}
            </div>
          </div>
        </NavLink>
        <NavLink to="/ltc-usd">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-1">
              <img
                src="https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=022"
                alt=""
              ></img>
            </div>
            <div className="col-md-3">Litecoin(LTC)</div>
            <div className="col-md-2">
              {"$" + numberWithCommas(props.LTCUSDtrade)}
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
