import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; //ek pg se dosaray pg per navigate kernay k liye
import "../../styles/AuthStyles.css";
import axios from "axios"; //database se data lene k liye
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout>
      <div className="reg">
        <div className="register">
          <h1>LOGIN PAGE</h1>
          <form onSubmit={handleSubmit}>
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
            {/* <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              forgot password
            </button> */}
            <button
              type="submit"
              className="forgetp"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot-Password?
            </button>

            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
