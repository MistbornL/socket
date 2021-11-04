import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import InpButt from "./service/for_chat/input_button";
import Msg from "./service/for_chat/msg";

const App = () => {
  // var ws = null;
  // useEffect(() => {
  //   ws = new WebSocket("ws://localhost:3000/ws");
  //   ws.onopen = () => {
  //     ws.send("Connected");
  //   };
  // });

  const [msg, setMsg] = useState("");
  const [msglist, setmsgList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setMsg(e.target.value);
  };

  const clickHandle = (e) => {
    let arr = msglist.concat(msg);
    setmsgList([...arr]);
  };

  console.log(msglist.id);

  return (
    <Fragment>
      <h1>Welcome to my Chat</h1>
      <div className="container">
        <div class="chat-container">
          <Msg msglist={msglist} />
        </div>
        <InpButt clickHandle={clickHandle} handleChange={handleChange} />
      </div>
    </Fragment>
  );
};

export default App;
