import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function ChatList() {
  const navigate = useNavigate();
  const [signedUp, setSignedUp] = useState(true);

  useEffect(() => {
    if (!signedUp) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header title="채팅" backBtn={false} etcBtn={false} />
      <div>리스트</div>
    </div>
  );
}

export default ChatList;
