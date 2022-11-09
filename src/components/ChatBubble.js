import "../css/ChatBubble.css";

function ChatBubble({ chatLog, nowUser }) {
  return (
    <div
      className={`bubble ${chatLog.sender === nowUser ? "me" : "you"} ${
        chatLog.content.length > 6 ? "long" : "short"
      }`}
    >
      {chatLog.content}
      <div className="time">{chatLog.time}</div>
    </div>
  );
}

export default ChatBubble;
