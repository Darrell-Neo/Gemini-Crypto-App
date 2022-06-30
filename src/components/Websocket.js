import React from "react";

const Websocket = (props) => {
  let text = "WebSocket running...";

  //   const exampleSocket = new WebSocket(
  //     "wss://www.example.com/socketserver",
  //     "protocolOne"
  //   );
  const geminiSocket = new WebSocket("wss://api.gemini.com/v2/marketdata");

  //   exampleSocket.onopen = function (event) {
  //     exampleSocket.send(
  //       "Here's some text that the server is urgently awaiting!"
  //     );
  //   };
  geminiSocket.onopen = function (event) {
    const sendMsg = {
      type: "subscribe",
      subscriptions: [
        {
          name: "candles_1d",
          symbols: ["BTCUSD", "ETHUSD", "DOGEUSD", "SHIBUSD", "LTCUSD"],
        },
      ],
    };
    geminiSocket.send(JSON.stringify(sendMsg));
  };

  const requestLatestData = () => {
    const sendMsg = {
      type: "subscribe",
      subscriptions: [{ name: "l2", symbols: ["BTCUSD", "ETHUSD"] }],
    };
    geminiSocket.send(JSON.stringify(sendMsg));
  };

  //   exampleSocket.onmessage = function (event) {
  //     console.log(event.data);
  //   };
  geminiSocket.onmessage = function (event) {
    // console.log(event.data);
    const msg = JSON.parse(event.data);
    console.log(msg);
    if (msg.type === "candles_1d_updates" && msg.symbol === "BTCUSD") {
      props.setBTCUSD(msg);
      console.log(props.BTCUSD);
    }
    if (msg.type === "candles_1d_updates" && msg.symbol === "ETHUSD") {
      props.setETHUSD(msg);
      console.log(props.ETHUSD);
    }
    if (msg.type === "candles_1d_updates" && msg.symbol === "DOGEUSD") {
      props.setDOGEUSD(msg);
      console.log(props.DOGEUSD);
    }
    if (msg.type === "candles_1d_updates" && msg.symbol === "SHIBUSD") {
      props.setSHIBUSD(msg);
      console.log(props.SHIBUSD);
    }
    if (msg.type === "candles_1d_updates" && msg.symbol === "LTCUSD") {
      props.setLTCUSD(msg);
      console.log(props.LTCUSD);
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
      geminiSocket.send(JSON.stringify(sendMsg));
    }
  };

  const stopWebSocket = () => {
    console.log("Trying to stop web socket...");
    geminiSocket.close();
  };

  return (
    <>
      <h6 onClick={stopWebSocket}>{text}</h6>
      <button onClick={requestLatestData}>Request Latest Data</button>
      <button onClick={stopWebSocket}>Stop Web Socket</button>
    </>
  );
};

export default Websocket;
