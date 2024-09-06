import { useState } from "react";
import "./Login.css";
import cross_icon from "../../assets/cross_icon.png";
const Login = ({ setShowLogin, setIsLoggedIn }) => {
  const [currentState, setCurrentState] = useState("Sign In");

  return (
    <div className="login-popup">
      <div className="form-container">
        <p className="title">{currentState} </p>
        <img
          onClick={() => setShowLogin(false)}
          className="cross"
          src={cross_icon}
          alt=""
        />

        <form className="content">
          {currentState === "Sign In" ? (
            <></>
          ) : (
            <input required type="text" className="input" placeholder="Name" />
          )}
          <input required type="email" className="input" placeholder="Email" />
          <input
            required
            type="password"
            className="input"
            placeholder="Password"
          />
          <p className="page-link">
            {currentState === "Sign In" ? (
              <span className="page-link-label">Forgot Password?</span>
            ) : (
              <></>
            )}
          </p>

          {currentState === "Sign In" ? (
            <button className="form-btn">Sign In</button>
          ) : (
            <button className="form-btn">Sign Up</button>
          )}
        </form>
        {currentState === "Sign In" ? (
          <p className="sign-up-label">
            Dont have an account?
            <span
              className="sign-up-link"
              onClick={() => setCurrentState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="sign-up-label">
            Already have an account?
            <span
              className="sign-up-link"
              onClick={() => setCurrentState("Sign In")}
            >
              Sign In
            </span>
          </p>
        )}

        <div className="buttons-container">
          <div className="google-login-button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              x="0px"
              y="0px"
              className="google-icon"
              viewBox="0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            {currentState === "Sign In" ? (
              <span>Sign In with Google</span>
            ) : (
              <span>Sign Up with Google</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
