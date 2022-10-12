import "../css/ChatBubble.css";

function ChatBubble({ chatLog, nowUser }) {
  return (
    <div className={`bubble ${chatLog.sender === nowUser ? "me" : "you"}`}>
      {chatLog.content}
    </div>
  );
}

export default ChatBubble;
