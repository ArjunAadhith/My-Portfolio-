export const Education = () => {
  return (
    <div className="education-container">
      <div className="education-title">EDUCATION</div>
      <div className="education-line"></div>
      <div className="education-content">
        <div className="education-section">
          <div className="education-left">
            <p className="degree">B.E - Computer Science and Engineering</p>
            <p>Karpaga Vinayaga College</p>
            <p>11/2022 - Present, Chennai</p>
            <p>cgpa: 8.1</p>
          </div>
          <div className="education-icon">
            <img
              src="college.png"
              alt="student with laptop"
              className="coding-img"
            />
          </div>
        </div>
        <div className="education-divider"></div>
        <div className="education-section">
          <div className="education-icon">
            <img src="school.png" alt="high school" className="school-img" />
          </div>
          <div className="education-right">
            <p className="degree">SSLC & HSC</p>
            <p>Shanthi Nikethan Matric</p>
            <p>08/2020 - 04/2022, Perambalur</p>
            <p>SSLC - 88.4 HSC - 82.6</p>
          </div>
        </div>
      </div>
    </div>
  );
};
