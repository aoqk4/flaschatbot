import "./App.css";
import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import Config from "./components/Config";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";

const st123 = {
  width: "10%",
  height: "50%",
};

function App() {
  return (
    <div>
      <h1>123</h1>
      <div id="123" style={st123}>
        <Chatbot
          config={Config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default App;
