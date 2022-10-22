import "./NavBar.css"
function NavBar({ onLogoClick, onProfileClick }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="clickable"
          onClick={() => {
            onLogoClick();
          }}
        >
          <i className="bi bi-lightning-charge-fill"></i>
          <strong>three pics</strong>
        </div>
        <div className="clickable"
          onClick={() => {
            onProfileClick();
          }}
        >
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
