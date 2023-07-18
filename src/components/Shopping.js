import React, { useState } from "react";
import Item from "./Item";

const ShoppingList = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [items, setItems] = useState([]);

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setItemQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName && itemQuantity) {
      const newItem = {
        name: itemName,
        quantity: itemQuantity,
      };
      setItems([...items, newItem]);
      setItemName("");
      setItemQuantity("");
    }
  };

  const handleItemRemove = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <div className=" flex flex-col items-center p-2 m-2 rounded-md bg-pink-200 text-sky-600 text-2xl">Shopping List</div>
      <div className="flex flex-col items-center">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="m-2 p-2 border border-green-300 rounded-sm"
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={handleNameChange}
        />
        <input
          className="m-2 p-2 border border-green-300 rounded-sm"
          type="text"
          placeholder="Quantity"
          value={itemQuantity}
          onChange={handleQuantityChange}
        />
        <button type="submit" className="m-2 p-2 bg-slate-900 text-white rounded-sm">Add Item</button>
      </form>
      
        {items.length>0 ?<div className="pt-5 text-2xl">List</div>:null}
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            onRemove={() => handleItemRemove(index)}
          />
        ))}
      </div>
     
    </div>
  );
};

export default ShoppingList;
