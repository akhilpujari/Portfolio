import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-title">Let's Collaborate</h2>
            <div className="contact-card">
              <div className="contact-content">
                <div className="contact-text">
                  <h3>Ready to bring ideas to life?</h3>
                  <p>As a passionate software engineer, I'm always excited to work on innovative projects and collaborate with creative minds. Whether you need a development partner, technical expertise, or just want to discuss tech, I'd love to hear from you.</p>
                  
                  <div className="expertise">
                    <h4>My Expertise</h4>
                    <div className="expertise-tags">
                      <span className="expertise-tag">Frontend Development</span>
                      <span className="expertise-tag">React.js</span>
                      <span className="expertise-tag">JavaScript</span>
                      <span className="expertise-tag">UI/UX Design</span>
                      <span className="expertise-tag">Web Applications</span>
                      <span className="expertise-tag">API Integration</span>
                    </div>
                  </div>
                  
                  <div className="contact-details">
                    <div className="contact-item">
                      <i className="bi bi-envelope"></i>
                      <span>akhilpujari12345@gmail.com</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-linkedin"></i>
                      <span>https://www.linkedin.com/in/akhil-pujari/</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-github"></i>
                      <span>https://github.com/akhilpujari</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-geo-alt"></i>
                      <span>Hyderabad, India</span>
                    </div>
                  </div>
                </div>
                
                <div className="availability">
                  <div className="status-indicator"></div>
                  <span>Currently available for new projects</span>
                </div>
              </div>
            </div>
            
            <div className="cta-buttons">
              <a href="mailto:akhilpujari12345@gmail.com" className="btn btn-netflix">
                <i className="bi bi-envelope me-2"></i> Send Email
              </a>
              <a href="https://www.linkedin.com/in/akhil-pujari/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                <i className="bi bi-linkedin me-2"></i> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;