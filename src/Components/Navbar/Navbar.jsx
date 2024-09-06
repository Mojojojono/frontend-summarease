import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import user_profile from "../../assets/user.png";
import logo from "../../assets/logo_nav.png";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(true);
    console.log("logged in");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("logged out");
  };

  return (
    <>
      <nav className="navbar">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="" />
        </Link>

        <ul className="nav-mid">
          <li>
            <a
              href="#home"
              onClick={() => {
                setMenu("Home");
              }}
              className={menu === "Home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#upload"
              onClick={() => setMenu("Upload")}
              className={menu === "Upload" ? "active" : ""}
            >
              Upload
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={() => setMenu("Features")}
              className={menu === "Features" ? "active" : ""}
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setMenu("About")}
              className={menu === "About" ? "active" : ""}
            >
              About
            </a>
          </li>
        </ul>
        <div className="nav-right">
          {!isLoggedIn ? (
            <button className="button" onClick={handleLogin}>
              LogIn
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          ) : (
            <img
              className="user"
              src={user_profile}
              alt=""
              onClick={handleLogout}
            />
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
