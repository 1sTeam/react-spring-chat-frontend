import "../css/AccountInfoItem.css";

function AccountInfoItem({ title, context }) {
  return (
    <div className="AccountInfo">
      <div className="detailTitle">{title}</div>
      {context}
    </div>
  );
}

export default AccountInfoItem;
