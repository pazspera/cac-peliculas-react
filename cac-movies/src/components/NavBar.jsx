import { Link } from "react-router-dom";
import logo from "../assets/hive.svg";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
        <div className="container">
          <Link to="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="navbar__logo me-2" />
            <span className="navbar__name">Movie Hive</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
