import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const [formData, setFormData] = useState({ id: "", name: "" });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addItem = () => {
    const newItem = {
      id: formData.id,
      name: formData.name,
    };
    setItems((prev) => [...prev, newItem]);
    setFormData({ id: "", name: "" });
  };

  const deleteItem = (e) => {
    setItems(items.filter((item) => item.id !== e));
  };
  return (
    <div className="container">
      <div className="add_name">
        <input
          type="text"
          name="id"
          placeholder="id"
          id="id"
          value={formData.id}
          onChange={handleFormData}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={formData.name}
          onChange={handleFormData}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="box">
        {items.map((item) => (
          <div key={item.id} className="item">
            {item.name} <span onClick={() => deleteItem(item.id)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
