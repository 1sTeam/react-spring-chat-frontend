import "../css/FindRoom.css";
import { GiMagnifyingGlass } from "react-icons/gi";

function FindRoom({ setFindName, findName }) {
  const onChange = (e) => {
    e.preventDefault();
    setFindName(e.target.value);
  };

  return (
    <div className="findRoom">
      <GiMagnifyingGlass className="findGlass" />
      <input
        className="findBox"
        type="text"
        onChange={onChange}
        placeholder="찾고 싶은 방 이름을 입력하세요"
      />
    </div>
  );
}

export default FindRoom;
