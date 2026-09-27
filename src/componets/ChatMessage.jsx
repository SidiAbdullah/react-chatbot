import "./ChatMessage.css";
import robotImage from "../assets/robot.png";
import userImage from "../assets/user.png";

function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "user-message" : "robot-message"}>
      {sender === "robot" && (
        <img className="chat-image" src={robotImage} alt="Robot" />
      )}

      <div className="message">{message}</div>

      {sender === "user" && (
        <img className="chat-image" src={userImage} alt="User" />
      )}
    </div>
  );
}

export default ChatMessage;
