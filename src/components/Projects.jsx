import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ascent - Job Tracker",
      description: "A comprehensive job application tracking system with drag-and-drop interface and analytics dashboard to monitor application success rates.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Redux Toolkit", "PostgreSQL", "Express.js"],
      features: ["Drag & Drop UI", "Analytics Dashboard", "Job Application Tracking", "Success Rate Analysis"],
      category: "Full Stack",
      status: "Completed",
      github: "https://github.com/akhilpujari/Ascent"
    },
    {
      id: 2,
      title: "Quiz Application",
      description: "An interactive quiz platform where users can participate in various subject quizzes and compare scores with other participants.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "PostgreSQL"],
      features: ["Multiple Quiz Categories", "Score Comparison", "User Rankings", "Real-time Results"],
      category: "Full Stack",
      status: "Completed",
      github: "https://github.com/akhilpujari/Quiz-Application-"
    },
    {
      id: 3,
      title: "News Magazine",
      description: "A modern news aggregator that fetches and displays news from popular news APIs with a clean, responsive interface.",
      image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "News API", "CSS", "Responsive Design"],
      features: ["API Integration", "Category Filtering", "Search Functionality", "Responsive Layout"],
      category: "Frontend",
      status: "Completed",
      github: "https://github.com/akhilpujari/News-Magazine"
    }
  ];

  const openGithubLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="projects-container">
      {/* Header Section */}
      <div className="projects-header">
        <div className="container">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">A collection of applications I've built with modern technologies and innovative solutions</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-content">
        <div className="container">
          <div className="row">
            {projects.map(project => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-actions">
                        <button 
                          className="btn btn-github"
                          onClick={() => openGithubLink(project.github)}
                        >
                          <i className="bi bi-github"></i> View Code
                        </button>
                      </div>
                    </div>
                    <div className="project-status">
                      <span className={`status-badge ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="project-details">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-features">
                      <h4>Key Features</h4>
                      <ul>
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="project-technologies">
                      <h4>Technologies</h4>
                      <div className="tech-tags">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <button 
                        className="github-link"
                        onClick={() => openGithubLink(project.github)}
                      >
                        <i className="bi bi-box-arrow-up-right"></i> GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub CTA Section */}
      <div className="github-cta">
        <div className="container">
          <div className="cta-content">
            <i className="bi bi-github"></i>
            <h2>Explore more on GitHub</h2>
            <p>Check out my other projects and contributions</p>
            <a 
              href="https://github.com/akhilpujari/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-netflix"
            >
            Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;