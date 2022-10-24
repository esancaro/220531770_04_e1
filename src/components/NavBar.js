import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div>
          <Link to="/">
            <i className="bi bi-lightning-charge-fill"></i>
            <strong>three pics</strong>
          </Link>
        </div>
        <div>
          <Link to="/logout" >
            <i className="bi bi-box-arrow-right"></i>&nbsp;
          </Link>
          <Link to="/profile">
            <i className="bi bi-person-circle"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
