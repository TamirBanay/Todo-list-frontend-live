import React from "react";
import { Link } from "react-router-dom";
import logInImag from "../../images/Done.png";
import "./home.css";

function HomePage() {
  return (
    <div className="home-main">
      <div className="home-img">
        <img src={logInImag} alt="Login" />
      </div>
      <div className="home-title">
        Welcome to <br />
        <span className="sec-home-title">OUR REMINDER</span>
      </div>
      <div className="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum
        tempus, interdum at dignissim metus. Ultricies sed nunc.
      </div>
      <div className="home-button-div">
        <Link to="/register">
          <button className="home-button">
            {" "}
            Get Started {"  "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
            >
              <path
                d="M15.4167 3.82027H0.589285C0.263852 3.82027 0 4.11306 0 4.47418V7.52576C0 7.88688 0.263852 8.17967 0.589285 8.17967H15.4167V10.6895C15.4167 11.8547 16.6862 12.4382 17.4287 11.6143L21.6548 6.92477C22.1151 6.41401 22.1151 5.58594 21.6548 5.07524L17.4287 0.385667C16.6862 -0.438205 15.4167 0.145301 15.4167 1.31046V3.82027Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
