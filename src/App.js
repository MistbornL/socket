import React, { Fragment } from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import InpButt from "./service/for_chat/input_button";
import Msg from "./service/for_chat/msg";
import { io } from "socket.io-client";

const App = () => {
  const [msg, setMsg] = useState("");
  const [msglist, setmsgList] = useState([]);
    const socket = useRef(null)

  const handleChange = (e) => {
    e.preventDefault();
    setMsg(e.target.value);
  };

    useEffect(() => {
        socket.current = io("http://localhost:8000")
    }, [])
  const clickHandle = (e) => {
    let arr = msglist.concat(msg);
    setmsgList([...arr]);
      console.log("weqwe")
      socket.current.emit("send_message", {"message": msg })
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
