import "./employers-list-item.css";
import React from "react";
const EmployersListItem = ({ name, description, deleteItem }) => {
  const [like, setLike] = React.useState(0);
  const onLike = () => {
    setLike(like + 1);
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="list">{name}</span>
      <span> description: {description}</span>
      <span className="tama">like:{like}</span>
      <button className="like" onClick={onLike}>
        Like
      </button>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="remove " onClick={deleteItem}>
          Remove
        </button>
      </div>
    </li>
  );
};
export default EmployersListItem;
