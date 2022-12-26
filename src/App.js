import React from "react";
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginFor from "./components/LoginFor";


const App = () => {

  if (!localStorage.getItem('username')) return <LoginFor />

  return (
    <ChatEngine
      height="100vh"
      projectID="7cca0906-029a-47a9-905a-ea0ef23fa4dc"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
