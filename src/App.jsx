import { useState } from "react";
import ChatInput from "./componets/ChatInput";
import ChatMessages from "./componets/ChatMessages";
import "./App.css";

function App() {
  const [messages, setChatMessages] = useState([
    {
      id: crypto.randomUUID(),
      message: "Hello",
      sender: "user",
    },
    {
      id: crypto.randomUUID(),
      message: "Hi!",
      sender: "robot",
    },
    {
      id: crypto.randomUUID(),
      message: "How are you?",
      sender: "user",
    },
  ]);

  return (
    <div className="chatbot-container">
      <ChatMessages messages={messages} />

      <ChatInput messages={messages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App;
