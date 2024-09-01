import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", {
        email,
        name,
        pass: password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/login");
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  // return (
  //   <div id="main">
  //     <div id="nav">
  //       <h1>Welcome To Your Personal Note Taking App</h1>
  //     </div>
  //     <div id="hero">
  //       <div id="register-from">
  //         <form onSubmit={handleSubmit}>
            // <input
            //   type="text"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
            //   placeholder="Name"
            // />
  //           <input
  //             type="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             placeholder="Email"
  //           />
  //           <input
  //             type="password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             placeholder="Password"
  //           />
  //           <button id="submit" type="submit">
  //             Register
  //           </button>
  //           <div id="take">
  //             <Link to="/login">
  //               <span>Login</span>
  //             </Link>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div id="main">
      <div id="nav">
        <h1>Welcome To Your Personal Note Taking App</h1>
      </div>
      <div id="hero">
        <div id="register-form">
          <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
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
              Register
            </button>
            <div id="take">
            <Link to="/login" >
            <span>Login</span>
            </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Register;
