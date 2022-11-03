import { useState } from "react";
import Header from "../components/Header";
import UserListItem from "../components/UserListItem";

function MakeRoom() {
  const [chosenUser, setChosenUser] = useState("");
  const [userList, setUserList] = useState([
    { userName: "user1", checked: false },
    { userName: "user2", checked: false },
    { userName: "user3", checked: false },
    { userName: "user4", checked: false },
  ]);
  return (
    <div>
      <Header title="대화상대 선택" backBtn={true} etcBtn={true} />

      {userList.map((user) => (
        <UserListItem
          userName={user.userName}
          chosenUser={chosenUser}
          setChosenUser={setChosenUser}
        />
      ))}
    </div>
  );
}

export default MakeRoom;
