import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatList() {
  const navigate = useNavigate();
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {
    if (!signedUp) {
      navigate("/login");
    }
  }, []);

  return <div>채팅방 리스트</div>;
}

export default ChatList;
