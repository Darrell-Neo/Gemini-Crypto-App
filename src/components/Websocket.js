import React from "react";

const Websocket = (props) => {
  props.geminiSocket.onopen = function (event) {
    const sendMsg = {
      type: "subscribe",
      subscriptions: [
        {
          name: "candles_1d",
          symbols: ["BTCUSD", "ETHUSD", "DOGEUSD", "SHIBUSD", "LTCUSD"],
        },
        {
          name: "l2",
          symbols: ["BTCUSD", "ETHUSD", "DOGEUSD", "SHIBUSD", "LTCUSD"],
        },
      ],
    };
    props.geminiSocket.send(JSON.stringify(sendMsg));
  };

  props.geminiSocket.onmessage = function (event) {
    const msg = JSON.parse(event.data);
    console.log(msg);
    if (msg.type === "candles_1d_updates" && msg.symbol === "BTCUSD") {
      props.setBTCUSD(msg);
    }
    if (msg.type === "candles_1d_updates" && msg.symbol === "ETHUSD") {
      props.setETHUSD(msg);
    }
    if (msg.type === "candles_1d_updates" && msg.symbol === "DOGEUSD") {
      props.setDOGEUSD(msg);
    }
    if (msg.type === "candles_1d_updates" && msg.symbol === "SHIBUSD") {
      props.setSHIBUSD(msg);
    }
    if (msg.type === "candles_1d_updates" && msg.symbol === "LTCUSD") {
      props.setLTCUSD(msg);
    }

    if (
      Object.keys(props.BTCUSD).length > 0 &&
      Object.keys(props.ETHUSD).length > 0 &&
      Object.keys(props.DOGEUSD).length > 0 &&
      Object.keys(props.SHIBUSD).length > 0 &&
      Object.keys(props.LTCUSD).length > 0
    ) {
      const sendMsg = {
        type: "unsubscribe",
        subscriptions: [
          {
            name: "candles_1d",
            symbols: ["BTCUSD", "ETHUSD", "DOGEUSD", "SHIBUSD", "LTCUSD"],
          },
        ],
      };
      props.geminiSocket.send(JSON.stringify(sendMsg));
    }

    if (msg.type === "trade" && msg.symbol === "BTCUSD") {
      props.setBTCUSDtrade(msg.price);
    }
    if (msg.type === "trade" && msg.symbol === "ETHUSD") {
      props.setETHUSDtrade(msg.price);
    }
    if (msg.type === "trade" && msg.symbol === "DOGEUSD") {
      props.setDOGEUSDtrade(msg.price);
    }
    if (msg.type === "trade" && msg.symbol === "SHIBUSD") {
      props.setSHIBUSDtrade(msg.price);
    }
    if (msg.type === "trade" && msg.symbol === "LTCUSD") {
      props.setLTCUSDtrade(msg.price);
    }
  };

  return <></>;
};

export default Websocket;
