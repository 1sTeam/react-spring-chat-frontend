function ChatListItem({ chatRoomName, currentTalk, isChecked }) {
  return (
    <div>
      <div className="chatroom">
        <div>{chatRoomName}</div>
        <div>{currentTalk}</div>
      </div>
      🔴
    </div>
  );
}

export default ChatListItem;
