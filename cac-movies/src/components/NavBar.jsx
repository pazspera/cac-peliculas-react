import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar__logo me-2" />
            <span>Movie Hive</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
