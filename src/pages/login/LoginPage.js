import React from "react";
import { useEffect, useState } from "react";
import "./login.css";
import logInImag from "../../images/Done.png";
import { useRecoilState } from "recoil";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

import { _userIsLoggedIn, _currentUserId, _user } from "../../services/atom";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(_user);
  const [currentUserId, setCurrentUserId] = useRecoilState(_currentUserId);
  const [userIsLoggedIn, setUserIsLoggedIn] = useRecoilState(_userIsLoggedIn);
  const navigate = useNavigate();

  const loginHandler = () => {
    if (!username || !password) {
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: "Username and password cannot be empty.",
      });
      return;
    }

    fetch("https://my-todo-app-new-9ccea1147719.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.token || !data.payload) {
          throw new Error(
            "Authentication failed. Invalid response from server."
          );
        }
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.payload));
        localStorage.setItem("userId", data.payload.id);

        setUserIsLoggedIn(true);
        setUser(data.payload);
        setCurrentUserId(data.payload.id);
        navigate(`/${data.payload.id}/todo`);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error during login",
          text: error.message,
          confirmButtonColor: "#d8605b",
        });
      });
  };

  return (
    <div className="main-login">
      <form>
        <div className="login-img">
          <img src={logInImag} />
        </div>
        <div className="login-title">
          Welcome back <br />
          to <br />
          <span className="secText"> OUR REMINDER</span>
        </div>
        <div className="inputs">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="login-email"
            type="email||username"
            placeholder="Enter your email or username"
            autoComplete="username"
          />
          <input
            className="login-password"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
          />
        </div>
        <div className="forgotPassword"> Forgot Password</div>
        <div className="signInButton-div">
          <button onClick={loginHandler} type="submit" className="signInButton">
            Sign In
          </button>
        </div>
        <div className="moveToRegister">
          Don’t have an account ?<Link to="/register">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
