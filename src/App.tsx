import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [error, setError] = useState({});

  const onChnageHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlerSubmit = () => {
    console.log("Submitted Data:", formData);
    const newError = {};
    if (!formData.email) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email is invalid";
    }
    if (!formData.name) {
      newError.name = "Name is required";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  return (
    <div className="container">
      <div className="add_name">
        <input
          type="text"
          name="email"
          placeholder="email"
          id="email"
          value={formData.email}
          onChange={onChnageHandler}
        />
        {error.email && <span className="error">{error.email}</span>}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={formData.name}
          onChange={onChnageHandler}
        />
        {error.name && <span className="error">{error.name}</span>}
        <button onClick={handlerSubmit}>Submit</button>
      </div>
      <div className="box">{/* List items will be rendered here */}</div>
    </div>
  );
}

export default App;
