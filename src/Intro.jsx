import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './intro.css'
import netflixSound from './assets/netflix-sound.mp3'
import logoImage from './assets/netfilxlogo.png';


export default function Intro(){
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); 
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);
  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      />
    </div>
  );
}