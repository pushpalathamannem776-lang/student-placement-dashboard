import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard() {
  return (
    <div className="app-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">

        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <div className="dashboard-content">

          <div className="welcome-section">
            <h2>Good Morning, Thanuja! 👋</h2>
            <p>
              Track your placement journey and stay updated with the latest
              opportunities.
            </p>
          </div>

          {/* Statistics */}
          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon">💼</div>
              <div>
                <p>Total Jobs Applied</p>
                <h2>12</h2>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⏳</div>
              <div>
                <p>Applications Under Review</p>
                <h2>5</h2>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div>
                <p>Interviews Scheduled</p>
                <h2>3</h2>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🎉</div>
              <div>
                <p>Students Selected</p>
                <h2>1</h2>
              </div>
            </div>

          </div>

          {/* Dashboard Sections */}
          <div className="dashboard-grid">

            {/* Deadlines */}
            <section className="dashboard-card">

              <div className="card-header">
                <div>
                  <h3>Upcoming Deadlines</h3>
                  <p>Important placement dates</p>
                </div>
              </div>

              <div className="deadline-item">
                <div>
                  <strong>TCS</strong>
                  <span>Software Developer</span>
                </div>
                <b>15 Oct 2026</b>
              </div>

              <div className="deadline-item">
                <div>
                  <strong>Infosys</strong>
                  <span>Graduate Engineer</span>
                </div>
                <b>18 Oct 2026</b>
              </div>

              <div className="deadline-item">
                <div>
                  <strong>Accenture</strong>
                  <span>Software Engineer</span>
                </div>
                <b>20 Oct 2026</b>
              </div>

            </section>

            {/* Recent Applications */}
            <section className="dashboard-card">

              <div className="card-header">
                <div>
                  <h3>Recent Applications</h3>
                  <p>Your latest job applications</p>
                </div>
              </div>

              <div className="application-item">
                <div className="company-logo">T</div>
                <div>
                  <strong>TCS</strong>
                  <span>Software Developer</span>
                </div>
                <span className="status under-review">
                  Under Review
                </span>
              </div>

              <div className="application-item">
                <div className="company-logo">I</div>
                <div>
                  <strong>Infosys</strong>
                  <span>Graduate Engineer</span>
                </div>
                <span className="status shortlisted">
                  Shortlisted
                </span>
              </div>

              <div className="application-item">
                <div className="company-logo">W</div>
                <div>
                  <strong>Wipro</strong>
                  <span>Project Engineer</span>
                </div>
                <span className="status applied">
                  Applied
                </span>
              </div>

            </section>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;