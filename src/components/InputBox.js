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
      />
    </div>
  );
}

export default InputBox;
