function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "Interview Alert",
      title: "TCS Interview Scheduled",
      message:
        "Your Software Developer interview is scheduled for 15 October 2026 at 10:00 AM.",
      date: "07 October 2026",
    },
    {
      id: 2,
      type: "Company Update",
      title: "Infosys Application Shortlisted",
      message:
        "Your application for Java Developer has been shortlisted.",
      date: "06 October 2026",
    },
    {
      id: 3,
      type: "Placement Announcement",
      title: "Accenture Placement Drive",
      message:
        "Accenture has opened applications for Software Engineer.",
      date: "05 October 2026",
    },
    {
      id: 4,
      type: "Interview Alert",
      title: "Wipro Interview Reminder",
      message:
        "Your Wipro interview is scheduled for 21 October 2026 at 11:30 AM.",
      date: "04 October 2026",
    },
  ];

  return (
    <div className="notifications-page">
      <h1>Notifications</h1>
      <p>Stay updated with placement activities.</p>

      <div className="notifications-container">
        {notifications.map((notification) => (
          <div className="notification-card" key={notification.id}>
            <span className="notification-type">
              {notification.type}
            </span>

            <h2>{notification.title}</h2>

            <p>{notification.message}</p>

            <small>{notification.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;