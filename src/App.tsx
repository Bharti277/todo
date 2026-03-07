import React, { useState } from "react";
import "./App.css";

interface FormData {
  email: string;
  name: string;
}

interface FormErrors {
  email?: string;
  name?: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
  });
  const [error, setError] = useState<FormErrors>({});

  const onChnageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlerSubmit = () => {
    console.log("Submitted Data:", formData);
    const newError: FormErrors = {};
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
        <div>
          <input
            type="text"
            name="email"
            placeholder="email"
            id="email"
            value={formData.email}
            onChange={onChnageHandler}
          />
          <p>{error.email && <span className="error">{error.email}</span>}</p>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            id="name"
            value={formData.name}
            onChange={onChnageHandler}
          />
          <p>{error.name && <span className="error">{error.name}</span>}</p>
        </div>
        <button onClick={handlerSubmit}>Submit</button>
      </div>
      <div className="box">
        <div>{formData.email && <p>Email: {formData.email}</p>}</div>
        <div>{formData.name && <p>Name: {formData.name}</p>}</div>
      </div>
    </div>
  );
}

export default App;
