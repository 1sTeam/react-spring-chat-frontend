import "../css/InputBox.css";

function InputBox({ box, onChangeState }) {
  return (
    <div className="inputContent">
      <label className="inputLabel" htmlFor={box.inputName}>
        {box.text}
      </label>
      <input
        className="inputBox"
        type={box.type}
        name={box.inputName}
        onChange={onChangeState}
        autoComplete="off"
        placeholder={
          box.inputName === "id" || box.inputName === "ID"
            ? "이메일 형식으로 입력해주세요"
            : ""
        }
      />
    </div>
  );
}

export default InputBox;
