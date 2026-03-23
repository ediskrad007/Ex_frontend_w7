import React from "react";

export default function StuffForm({ onAdd }) {
const [name,setName] = React.useState("");
const [price,setPrice] = React.useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    const newStuff = {
      name: name,
      price: Number(price)
    };
    onAdd(newStuff);
    setName("");
    setPrice("");
  };
  return (

    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="text" placeholder="Banana" value={name} onChange={(e) => setName(e.target.value)} />

      <p>Stuff price</p>
      <input type="text" placeholder="15" value={price} onChange={(e) => setPrice(e.target.value)} />

      <button>Add Stuff</button>
    </form>
  );
}
