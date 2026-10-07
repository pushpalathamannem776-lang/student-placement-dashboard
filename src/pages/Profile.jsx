import { useState } from "react";
import Navbar from "../components/Navbar";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [student, setStudent] = useState({
    name: "Thanuja",
    rollNo: "21CS001",
    course: "Computer Science",
    college: "ABC College",
    email: "thanuja@gmail.com",
    phone: "9876543210",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <h1>Student Profile</h1>

        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {student.name.charAt(0)}
            </div>

            <div>
              <h2>{student.name}</h2>
              <p>{student.course}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="profile-field">
              <label>Full Name</label>

              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.name}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Roll Number</label>

              {isEditing ? (
                <input
                  type="text"
                  name="rollNo"
                  value={student.rollNo}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.rollNo}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Course</label>

              {isEditing ? (
                <input
                  type="text"
                  name="course"
                  value={student.course}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.course}</p>
              )}
            </div>

            <div className="profile-field">
              <label>College</label>

              {isEditing ? (
                <input
                  type="text"
                  name="college"
                  value={student.college}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.college}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Email</label>

              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.email}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Phone</label>

              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={student.phone}
                  onChange={handleChange}
                />
              ) : (
                <p>{student.phone}</p>
              )}
            </div>
          </div>

          <div className="profile-buttons">
            {isEditing ? (
              <>
                <button onClick={handleSave}>Save Changes</button>

                <button
                  className="cancel-button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;