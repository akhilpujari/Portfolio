import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Brand from '../assets/brand bg.png';
import capibara from '../assets/capibara.webp'
import developer from '../assets/developer.jpg'
import stalker from '../assets/stalker.jpg'
import gamer from '../assets/gamer.png'

export default function Navbar() {
 const params = useParams();
  const typeFromParams = params.type;
  const type = typeFromParams || localStorage.getItem('profileType');
  const [scrolled, setScrolled] = useState(false);

  const brandMap = {
    Recruiter: capibara,
    Developer: developer,
    Stalker: stalker,
    Gamer: gamer,
  };

  const brand = brandMap[type] ;

  useEffect(() => {
  if (type) {
    localStorage.setItem('profileType', type);
  }
}, [type]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-solid' : 'navbar-blur'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand ms-3 me-4" to="/">
          <img src={Brand} style={{ height: 34 }} alt="brand" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-2" id="navbarNavDropdown">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item"><Link className="nav-link text-white" to="/browse">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/profile/experience">Professional</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/profile/skills">Skills</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/profile/projects">Projects</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/profile/contactme">Hire Me</Link></li>
            </ul>

            <div className="me-4">
              <Link to='/browse'>
                <img 
                src={brand || developer} 
                alt="Profile" 
                className="rounded-circle profile-img"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
