import "../css/UserListItem.css";

function UserListItem({ userName, chosenUser, setChosenUser }) {
  const onClick = (e) => {
    setChosenUser(userName);
  };

  return (
    <div className="userItem">
      <div className="userName">{userName}</div>
      <input
        className="userBtn"
        type="radio"
        value={userName}
        checked={userName === chosenUser}
        onClick={onClick}
      />
    </div>
  );
}

export default UserListItem;
