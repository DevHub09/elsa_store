import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; //ek pg se dosaray pg per navigate kernay k liye
import "../styles/AuthStyles.css";
import axios from "axios"; //Axios is a JavaScript library used for making HTTP requests from web applications.
const Register = () => {
  const [name, setName] = useState(""); //first parameter getter 2nd is setter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  //....................
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault(); //default behaviour band kray gay
    try {
      const res = await axios.post(`/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
    // console.log(name,email,password,address,phone);
    // toast.success("Registere succesfully")
  };

  return (
    <Layout>
      <div className="reg">
        <div className="register">
          <h1>REGISTER PAGE</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputName"
                required
                placeholder="enter your name"
              />
            </div>

            <div className="mb-3">
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputName"
                placeholder="enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter your password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputName"
                required
                placeholder="enter your phone"
              />
            </div>
            <div className="mb-3">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="form-control"
                required
                id="exampleInputName"
                placeholder="enter your address"
              />
            </div>
            <div className="mb-3">
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                className="form-control"
                required
                id="exampleInputEmail"
                placeholder="your bff name ?"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
