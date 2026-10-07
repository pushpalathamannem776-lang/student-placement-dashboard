import { useState } from "react";
import Navbar from "../components/Navbar";

function Jobs() {
  const [search, setSearch] = useState("");
  const [company, setCompany] = useState("All");

  const jobs = [
    {
      id: 1,
      company: "TCS",
      role: "Software Developer",
      location: "Bangalore",
      salary: "₹6 LPA",
      deadline: "15 October 2026",
    },
    {
      id: 2,
      company: "Infosys",
      role: "Java Developer",
      location: "Hyderabad",
      salary: "₹5 LPA",
      deadline: "18 October 2026",
    },
    {
      id: 3,
      company: "Wipro",
      role: "System Engineer",
      location: "Chennai",
      salary: "₹4.5 LPA",
      deadline: "19 October 2026",
    },
    {
      id: 4,
      company: "Accenture",
      role: "Software Engineer",
      location: "Pune",
      salary: "₹6.5 LPA",
      deadline: "20 October 2026",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesCompany =
      company === "All" || job.company === company;

    return matchesSearch && matchesCompany;
  });

  const handleApply = (job) => {
    alert(`Applied for ${job.role} at ${job.company}`);
  };

  return (
    <>
      <Navbar />

      <div className="jobs-page">
        <h1>Job Openings</h1>

        <p>Search and apply for placement opportunities.</p>

        <div className="job-filters">
          <input
            type="text"
            placeholder="Search company or job role"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="All">All Companies</option>
            <option value="TCS">TCS</option>
            <option value="Infosys">Infosys</option>
            <option value="Wipro">Wipro</option>
            <option value="Accenture">Accenture</option>
          </select>
        </div>

        <div className="jobs-container">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div className="job-card" key={job.id}>
                <h2>{job.company}</h2>

                <h3>{job.role}</h3>

                <p>
                  <strong>Location:</strong> {job.location}
                </p>

                <p>
                  <strong>Salary:</strong> {job.salary}
                </p>

                <p>
                  <strong>Application Deadline:</strong>{" "}
                  {job.deadline}
                </p>

                <button onClick={() => handleApply(job)}>
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Jobs;