import React from "react";
import ChatBot from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ messages }) {
  const messagesRef = React.useRef(null);

  React.useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="messages" ref={messagesRef}>
      {messages.map((message) => (
        <ChatBot
          key={message.id}
          message={message.message}
          sender={message.sender}
        />
      ))}
    </div>
  );
}

export default ChatMessages;
