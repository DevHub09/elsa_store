import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Spinner = () => {
  const [count, setCount] = useState(5); //5 sec
  const navigate = useNavigate();
  const prevValue = 5;
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000); //1
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center">redirecting to you in {count} seconds </h1>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
