import { NavLink } from "react-router-dom";
import { useTeamAuth } from "../context/TeamContext";

function Navbar() {
  // Pull our global login status and logout trigger from our context file
  const { isLoggedIn, logout } = useTeamAuth();

  return (
    <header className="navbar">
      <h1>Women IPL Dashboard</h1>

      <nav>
        {/* NavLink automatically appends the .active class for our index.css styles! */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/matches">Matches</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>

        {/* Dynamic Auth Toggles */}
        {!isLoggedIn ? (
          // If NOT logged in, show them the Registration / Login Portal route
          <NavLink to="/portal">Portal Login 🔐</NavLink>
        ) : (
          // If logged in, show them the private Admin screen + a dynamic logout action button
          <>
            <NavLink to="/admin">Dashboard 📊</NavLink>
            <button 
              onClick={logout} 
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
                padding: "8px 18px",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => e.target.style.color = "var(--accent)"}
              onMouseLeave={(e) => e.target.style.color = "var(--text-muted)"}
            >
              Logout 🚪
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;