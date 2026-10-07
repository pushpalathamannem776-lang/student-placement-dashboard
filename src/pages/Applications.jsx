import Navbar from "../components/Navbar";

function Applications() {
  const applications = [
    {
      id: 1,
      company: "TCS",
      role: "Software Developer",
      date: "01 October 2026",
      status: "Under Review",
    },
    {
      id: 2,
      company: "Infosys",
      role: "Java Developer",
      date: "02 October 2026",
      status: "Shortlisted",
    },
    {
      id: 3,
      company: "Wipro",
      role: "System Engineer",
      date: "03 October 2026",
      status: "Applied",
    },
    {
      id: 4,
      company: "Accenture",
      role: "Software Engineer",
      date: "04 October 2026",
      status: "Rejected",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="applications-page">
        <h1>My Applications</h1>

        <p>Track the status of your job applications.</p>

        <div className="applications-table">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Role</th>
                <th>Applied Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td>{application.company}</td>

                  <td>{application.role}</td>

                  <td>{application.date}</td>

                  <td>
                    <span
                      className={`status ${application.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {application.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Applications;