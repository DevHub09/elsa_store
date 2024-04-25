import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/category/create-category", {
        name,
      });
      console.log(response.data);
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.response.data.error);
      setSuccess(false);
    }
  };

  return (
    <div className="container">
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Category Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && (
          <div className="alert alert-success">
            Category created successfully
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
