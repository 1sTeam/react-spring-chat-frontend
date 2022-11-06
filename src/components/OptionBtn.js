import { GiHamburgerMenu } from "react-icons/gi";
import { BsTrashFill, BsFillPersonFill } from "react-icons/bs";
import "../css/OptionBtn.css";

function OptionBtn({ btnName, seen, handleClick }) {
  return (
    <button
      className={`optionBtn ${btnName} ${seen ? "" : "unseen"}`}
      onClick={handleClick}
    >
      {btnName === "etc" ? <GiHamburgerMenu /> : ""}
      {btnName === "trashBtn" ? <BsTrashFill /> : ""}
      {btnName === "myPageBtn" ? <BsFillPersonFill /> : ""}
    </button>
  );
}

export default OptionBtn;
