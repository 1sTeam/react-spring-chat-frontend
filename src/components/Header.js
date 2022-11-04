import { useState } from "react";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";

function Header({ title, backBtn, etcBtn }) {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const showOption = (e) => {
    e.preventDefault();
    setIsChecked((x) => !isChecked);
  };

  return (
    <div className={`top ${etcBtn ? "" : "unseen"}`}>
      <button className={`back ${backBtn ? "" : "unseen"}`} onClick={goBack}>
        {title === "Make Room" ? <AiOutlineClose /> : <AiOutlineLeft />}
      </button>
      <div className={`headerTitle ${etcBtn ? "" : "unseen"}`}>{title}</div>
      <div>
        <button className={`trashBtn ${isChecked ? "" : "unseen"}`}>
          <BsTrashFill />
        </button>
        <button
          className={`etc ${etcBtn ? "" : "unseen"}`}
          onClick={showOption}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

export default Header;
