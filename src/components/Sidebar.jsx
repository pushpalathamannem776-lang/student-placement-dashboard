import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-icon">🎓</div>
        <div>
          <h2>PlacementHub</h2>
          <span>Student Portal</span>
        </div>
      </div>

      <div className="sidebar-menu">

        <p className="menu-title">MAIN MENU</p>

        <NavLink to="/dashboard" className="sidebar-link">
          <span>🏠</span>
          Dashboard
        </NavLink>

        <NavLink to="/jobs" className="sidebar-link">
          <span>💼</span>
          Job Openings
        </NavLink>

        <NavLink to="/applications" className="sidebar-link">
          <span>📋</span>
          My Applications
        </NavLink>

        <NavLink to="/interviews" className="sidebar-link">
          <span>📅</span>
          Interviews
        </NavLink>

        <NavLink to="/notifications" className="sidebar-link">
          <span>🔔</span>
          Notifications
        </NavLink>

        <p className="menu-title">ACCOUNT</p>

        <NavLink to="/profile" className="sidebar-link">
          <span>👤</span>
          Profile
        </NavLink>

      </div>

      <div className="sidebar-bottom">

        <button className="logout-button" onClick={handleLogout}>
          <span>🚪</span>
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;