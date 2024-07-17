import React from "react";
import logInImag from "../../images/Done.png";
import { useEffect, useState } from "react";

import "./Register.css";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const registerHandler = () => {
    fetch("https://my-todo-app-new-9ccea1147719.herokuapp.com/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/login`);
      });
  };

  return (
    <div className="main-register">
      <div className="register-img">
        <img src={logInImag} />
      </div>
      <div className="register-title">
        Get’s things done <br />
        with TODO
      </div>

      <div className="helpTask-text">Let’s help you meet up your tasks</div>
      <form>
        <div className="register-inputs">
          <input
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"

          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"

          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="password"

          />
        </div>
        <div className="register-button-div">
          <button className="register-button" onClick={registerHandler}>
            Register
          </button>
        </div>
        <div className="moveToLogin">
          Already have an account ?<Link to="/login"> Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
