import { useState } from "react";
import Header from "../components/Header";
import ChatBubble from "../components/ChatBubble";
import "../css/ChatRoom.css";

function ChatRoom() {
  const [chatContent, setChatContent] = useState("");
  const [count, setCount] = useState(3);
  const [nowUser, setNowUser] = useState("user1");
  const [chatLog, setChatLog] = useState([
    {
      content: "뭐해",
      sender: "user1",
      count: 1,
    },
    {
      content: "놀아",
      sender: "user2",
      count: 2,
    },
    {
      content:
        "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
      sender: "user2",
      count: 3,
    },
  ]);

  const onChange = (e) => {
    setChatContent(e.target.value);
  };
  const onSubmit = (e) => {
    const newContent = {
      content: { chatContent },
      sender: { nowUser },
      count: { count },
    };
    setChatLog({ ...chatLog, newContent });
  };

  return (
    <div>
      <Header title={nowUser} backBtn={false} etcBtn={false} />
      <div className="chatLogList">
        {chatLog.map((chatLog) => (
          <ChatBubble key={chatLog.count} chatLog={chatLog} nowUser={nowUser} />
        ))}
      </div>
      <form id="chatInput" onSubmit={onSubmit}>
        <input type="text" name="talk" onChange={onChange} />
        <input type="submit" value="전송" />
      </form>
    </div>
  );
}

export default ChatRoom;
