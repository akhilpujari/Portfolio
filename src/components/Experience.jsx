
import './Experience.css';

const Experience = () => {
  const timelineData = [
    {
      id: 1,
      title: "Looking for new opportunities",
      type: "job",
      date: "Present",
      description: "Currently seeking full-time opportunities in front-end development and UI engineering.",
      icon: "🔍",
      status: "current"
    },
    {
      id: 2,
      title: "SDE Intern",
      company: "Pixelvide",
      type: "Internship",
      date: "Feb 2025 - May 2025",
      description: "Assisted in building websites, performed code reviews, and learned industry best practices.",
      icon: "👨‍💻"
    },
    {
      id: 3,
      title: "Bachelor's in Computer Science and Engineering",
      company: "CMR Institute of Technology, Hyderabad",
      type: "education",
      date: "Nov 2021 - Jun 2025",
      description: "",
      icon: "🎓"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="netflix-header">
        <div className="container">
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">A timeline of my professional and educational experience</p>
        </div>
      </div>
      
      <div className="container">
        <div className="vertical-timeline">
          {timelineData.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item ${item.status === 'current' ? 'current' : ''}`}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">{item.icon}</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                {item.company && <h4 className="timeline-company">{item.company}</h4>}
                <p className="timeline-description">{item.description}</p>
                {item.status === 'current' && (
                  <div className="current-indicator">
                    <span className="pulse-dot"></span>
                    Currently Seeking Opportunities
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;