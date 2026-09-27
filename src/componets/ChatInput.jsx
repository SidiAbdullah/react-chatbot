import React from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = React.useState("");

  function sendMessage() {
    if (!inputText.trim()) return;

    const userMessage = {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    };

    const response = Chatbot.getResponse(inputText);

    setChatMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <div className="input-container">
      <input
        className="input-message"
        placeholder="Type a message..."
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
