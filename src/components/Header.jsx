import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="top-header">

      <div className="header-left">
        <h1>Student Placement Dashboard</h1>
        <p>Manage your placement journey</p>
      </div>

      <div className="header-right">

        <button
          className="notification-button"
          onClick={() => navigate("/notifications")}
        >
          🔔
          <span className="notification-badge">3</span>
        </button>

        <div
          className="user-profile"
          onClick={() => navigate("/profile")}
        >
          <div className="user-avatar">T</div>

          <div className="user-info">
            <strong>Thanuja</strong>
            <span>Student</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Header;