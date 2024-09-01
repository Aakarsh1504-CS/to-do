import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

import "./Home.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // localStorage.setItem('email', e.data.email);
      // localStorage.setItem('password', e.data.password);
      const response = await axios.post("http://localhost:3000/login", {
        email,
        pass: password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/profile");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div id="main">
      <div id="nav">
        <h1>Welcome To Your Personal Note Taking App</h1>
      </div>
      <div id="hero">
        <div id="register-form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button id="submit" type="submit">
              Login
            </button>
            <div id="take">
            <Link to="/register" >
            <span>Register</span>
            </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
