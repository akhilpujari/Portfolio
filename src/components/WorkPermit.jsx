import './WorkPermit.css';

const WorkPermit = () => {
  return (
    <div className="work-permit-container">
      {/* Header Section */}
      <div className="work-permit-header">
        <div className="container">
          <h1 className="work-permit-title">Work Eligibility</h1>
          <p className="work-permit-subtitle">Information about my work authorization and location</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="work-permit-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* Location Card */}
              <div className="info-card">
                <div className="info-card-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="info-card-content">
                  <h3>Current Location</h3>
                  <div className="location-details">
                    <div className="location-main">
                      <span className="city">Hyderabad, India</span>
                    </div>
                    <p className="location-description">
                      Based in the vibrant city of Hyderabad, known as India's technology hub with 
                      excellent infrastructure and a thriving tech community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Authorization Card */}
              <div className="info-card">
                <div className="info-card-icon">
                  <i className="bi bi-passport"></i>
                </div>
                <div className="info-card-content">
                  <h3>Work Authorization</h3>
                  <div className="authorization-details">
                    <div className="status-badge authorized">
                      <i className="bi bi-check-circle"></i>
                      Authorized to work in India
                    </div>
                    <ul className="authorization-list">
                      <li>
                        <i className="bi bi-check-lg"></i>
                        <span>Indian citizen with full work rights</span>
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>
                        <span>No visa sponsorship required</span>
                      </li>
                      <li>
                        <i className="bi bi-check-lg"></i>
                        <span>Eligible for immediate employment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="info-card contact-card">
                <div className="info-card-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="info-card-content">
                  <h3>Get in Touch</h3>
                  <p>I'm available for new opportunities and collaborations. Feel free to reach out!</p>
                  <div className="contact-actions">
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
        </div>
      </div>
    </div>
  );
};

export default WorkPermit;