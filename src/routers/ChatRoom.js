import { useEffect, useState } from "react";
import Header from "../components/Header";
import ChatBubble from "../components/ChatBubble";
import "../css/ChatRoom.css";
import SockJS from "sockjs-client";
import * as Stomp from "stompjs";

const SERVER_NAME = "http://localhost:3030";

function ChatRoom({ nowChatRoomName, nowChatRoomuuid }) {
  const [stompClient, setStompClient] = useState(null);
  const [chatContent, setChatContent] = useState("");
  const [count, setCount] = useState(3);
  const [nowUser, setNowUser] = useState("user1");
  const [chatLog, setChatLog] = useState([
    {
      content: "뭐해",
      sender: "user1",
      count: 1,
      time: "11:31",
    },
    {
      content: "놀아",
      sender: "user2",
      count: 2,
      time: "11:31",
    },
    {
      content:
        "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
      sender: "user2",
      count: 3,
      time: "11:32",
    },
  ]);

  const stompConnect = (onResponseMessage) => {
    return new Promise((succ, fail) => {
      const sockJS = new SockJS(SERVER_NAME + "/socket");
      const stompCli = Stomp.over(sockJS);
      setStompClient(stompCli);
      const headers = {
        token: localStorage.getItem("accessToken"),
      };

      stompCli.connect(
        headers,
        function (frame) {
          // 토큰 집어넣고
          console.log("connected: " + frame);
          stompSubscribe("/topic/" + global.syncInfo.roomId, onResponseMessage); // 해당 방으로 구독 ->
          succ(true);
        },
        function (error) {
          fail(error);
        }
      );
    });
  };

  const stompSubscribe = (path, onResponseMessage) => {
    const headers = {
      token: global.syncInfo.token,
    };

    stompClient.subscribe(
      path,
      function (response) {
        //전달받은 메시지
        console.log("응답: " + response);
        //const message = JSON.parse(response.body);
        // setChatLog([...chatLog, message])
        onResponseMessage(response);
      },
      headers
    );
  };

  const stompDisconnect = () => {
    if (stompClient != null) {
      if (stompClient.connected) {
        stompClient.disconnect(() => {});
      }
      stompClient = null;
    }
  };

  const stompSendMessage = (type, message) => {
    //syncPub으로 해당 메시지를 publish 요청한다.
    const body = {
      type: type,
      roomId: global.syncInfo.roomId, //서버에서는 토큰 안에 있는 룸아이디랑 이 룸아이디랑 일치하는지 검사해야한다.
      senderToken: global.syncInfo.token,
      message: message,
    };
    stompClient.send(
      "/app/syncPub",
      { token: global.syncInfo.token },
      JSON.stringify(body)
    );
  };

  // const isWebsocketConnected = () => {
  //   return stompClient != null;
  // };

  const onChange = (e) => {
    setChatContent(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (chatContent === "") {
      return;
    } else {
      setCount((x) => x + 1);
      const newChat = {
        content: chatContent,
        sender: nowUser,
        count: count,
        time: "11:33",
      };
      setChatLog([...chatLog, newChat]);
      setChatContent("");
    }
  };

  useEffect(() => {
    console.log("render");
    stompConnect();
    return () => stompDisconnect();
  }, []);

  return (
    <div>
      <Header
        title={nowChatRoomName}
        roomUuid={nowChatRoomuuid}
        backBtn={true}
        etcBtn={true}
      />
      <div className="chatLogList">
        {chatLog.map((chatLog) => (
          <ChatBubble
            key={chatLog.sender + chatLog.count}
            chatLog={chatLog}
            nowUser={nowUser}
          />
        ))}
      </div>
      <form className="chatInput" onSubmit={onSubmit}>
        <input
          className="contentInput"
          type="text"
          name="talk"
          onChange={onChange}
          value={chatContent}
          autoComplete="off"
        />
        <input className="contentSubmit" type="submit" value={">"} />
      </form>
    </div>
  );
}

export default ChatRoom;
