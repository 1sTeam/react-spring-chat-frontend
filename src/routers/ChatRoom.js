function ChatRoom() {
  return (
    <div>
      <div>채팅 내용</div>
      <form>
        <input type="text" name="talk" />
        <input type="submit" value="전송" />
      </form>
    </div>
  );
}

export default ChatRoom;
