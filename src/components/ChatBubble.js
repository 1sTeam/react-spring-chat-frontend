import "../css/ChatBubble.css";

function ChatBubble({ chatLog, nowUser }) {
  return (
    <div>
      <div className={`sender ${chatLog.userName === nowUser ? "me" : "you"}`}>
        {chatLog.userName}
      </div>

      <div
        className={`bubble ${chatLog.userName === nowUser ? "me" : "you"} ${
          chatLog.context.length > 5 ? "long" : "short"
        }`}
      >
        {chatLog.context}
      </div>
    </div>
  );
}

export default ChatBubble;
