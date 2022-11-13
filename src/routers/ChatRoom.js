import { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import ChatBubble from "../components/ChatBubble";
import "../css/ChatRoom.css";
import SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import axios from "axios";

const SERVER_NAME = "http://54.215.135.43:8080";

function ChatRoom({ nowChatRoomName, nowChatRoomuuid }) {
  const [stompClient, setStompClient] = useState(null);
  const [chatContent, setChatContent] = useState("");
  const [nowUser, setNowUser] = useState("");
  const [chatLog, setChatLog] = useState([
    { userName: "", context: `안녕하세요 여기는 ${nowChatRoomName} 방입니다.` },
  ]);

  const scrollRef = useRef();

  const stompConnect = (onResponseMessage) => {
    return new Promise((succ, fail) => {
      const sockJS = new SockJS("http://54.215.135.43:8080/ws");
      const stompCli = Stomp.over(sockJS);
      setStompClient(stompCli);
      const headers = {
        token: localStorage.getItem("token"),
      };

      console.log(headers);

      stompCli.connect(
        {},
        function (frame) {
          // 토큰 집어넣고
          console.log("connected: " + frame);
          stompSubscribe(
            "/sub/room/" + nowChatRoomuuid,
            onResponseMessage,
            stompCli
          ); // 해당 방으로 구독 ->
          succ(true);
        },
        function (error) {
          console.log("에러");
          fail(error);
        }
      );
    });
  };

  const stompSubscribe = (path, onResponseMessage, stompCli) => {
    const headers = {
      token: localStorage.getItem("token"),
    };

    console.log("구독");

    stompCli.subscribe(
      path,
      function (response) {
        //전달받은 메시지
        console.log("응답:" + response);
        const message = JSON.parse(response.body);
        //setChatLog([...chatLog, message])
        console.log(message);
        console.log(chatLog);
        addChatLog(message);
        /*onResponseMessage(response);*/
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

  const stompSendMessage = (nowUser, chatContent) => {
    //syncPub으로 해당 메시지를 publish 요청한다.
    //username, context
    const body = {
      userName: nowUser,
      context: chatContent,
    };
    stompClient.send(`/pub/room/${nowChatRoomuuid}`, {}, JSON.stringify(body));
  };

  const addChatLog = (message) => {
    setChatLog((chatLog) => [...chatLog, message]);
    console.log(chatLog);
    setChatContent("");
  };

  // const isWebsocketConnected = () => {
  //   return stompClient != null;
  // };

  //길이 제한
  const onChange = (e) => {
    if (chatContent.length > 144) {
      return;
    } else {
      setChatContent(e.target.value);
    }
  };

  //메시지 전송(수정 필수)
  const onSubmit = (e) => {
    e.preventDefault();
    if (chatContent === "") {
      return;
    } else {
      {
        //타입 메시지만 정리해서 stompsend
        stompSendMessage(nowUser, chatContent);
      }
    }
  };

  //스톰프 연결
  const token = localStorage.getItem("token");
  useEffect(() => {
    //사용자 이름 가져오기
    axios
      .get("/api/auth/read", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        console.log(res);
        setNowUser(res.data.data.username);
        JSON.stringify(nowUser);
      })
      .catch((err) => console.log(err));

    console.log("render");
    stompConnect();
    return () => stompDisconnect();
  }, []);

  //스크롤 위치 하단 조정
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    console.log(chatLog);
    scrollToBottom();
  }, [chatLog]);

  return (
    <div>
      <Header
        title={nowChatRoomName}
        roomUuid={nowChatRoomuuid}
        backBtn={true}
        etcBtn={true}
      />
      <div className="chatLogList" ref={scrollRef}>
        {chatLog.map((chatLog) => (
          <ChatBubble
            key={chatLog.context + 1}
            chatLog={chatLog}
            nowUser={nowUser}
          />
        ))}
      </div>
      <form className="chatInput" onSubmit={onSubmit}>
        <textarea
          className="contentInput"
          name="talk"
          onChange={onChange}
          value={chatContent}
        />
        <input className="contentSubmit" type="submit" value={">"} />
      </form>
    </div>
  );
}

export default ChatRoom;
