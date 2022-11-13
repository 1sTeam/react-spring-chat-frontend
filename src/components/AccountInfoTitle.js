import "../css/AccountInfoTitle.css";
import { AiOutlineProfile, AiFillEdit } from "react-icons/ai";

function AccountInfoTitle({ title }) {
  return (
    <div className="InfoTitle">
      {title}
      {title === "회원 정보 조회" ? (
        <AiOutlineProfile className="InfoIcon" />
      ) : (
        <AiFillEdit className="InfoIcon" />
      )}
    </div>
  );
}

export default AccountInfoTitle;
