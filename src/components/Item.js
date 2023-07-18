import React from "react";
const Item = ({ name, quantity, onRemove }) => {
  return (
    <div className="flex">
      <div className="m-2">{name}</div>
      <div className="m-2">{quantity}</div>
      <button className="m-2  bg-black text-white rounded" onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Item;
