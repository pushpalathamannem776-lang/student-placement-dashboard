function Interviews() {
  const interviews = [
    {
      id: 1,
      company: "TCS",
      role: "Software Developer",
      date: "15 October 2026",
      time: "10:00 AM",
      mode: "Online",
      status: "Scheduled",
    },
    {
      id: 2,
      company: "Infosys",
      role: "Java Developer",
      date: "18 October 2026",
      time: "2:00 PM",
      mode: "Online",
      status: "Scheduled",
    },
    {
      id: 3,
      company: "Wipro",
      role: "System Engineer",
      date: "21 October 2026",
      time: "11:30 AM",
      mode: "Offline",
      status: "Scheduled",
    },
  ];

  return (
    <div className="interviews-page">
      <h1>Interview Schedule</h1>

      <p>View your upcoming placement interviews.</p>

      <div className="interviews-container">
        {interviews.map((interview) => (
          <div className="interview-card" key={interview.id}>
            <h2>{interview.company}</h2>

            <h3>{interview.role}</h3>

            <p>
              <strong>Date:</strong> {interview.date}
            </p>

            <p>
              <strong>Time:</strong> {interview.time}
            </p>

            <p>
              <strong>Mode:</strong> {interview.mode}
            </p>

            <p>
              <strong>Status:</strong> {interview.status}
            </p>

            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interviews;