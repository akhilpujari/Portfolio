import skills from '../assets/skills.webp'
import workPermit from '../assets/Work permit.jpeg'
import  experience from '../assets/experience.webp'
import  projects from '../assets/projects.jpg'
import  contactMe from '../assets/contact me.webp'
import  certifications from '../assets/certifications.webp'
import music from '../assets/music.webp'
import reading from '../assets/reading.webp'
import blogs from '../assets/blogs.jpg'
import readme from '../assets/contactme.jpg'
import { useParams } from 'react-router-dom'

export default function Content(){

  const spotlight = {
    Recruiter : "https://media.giphy.com/media/DGwJRXVm6PmRa/200.gif",
    Developer : "https://media.tenor.com/LXpL4L2KuLIAAAAC/it-crowd.gif",
    Stalker : "https://i.gifer.com/7V7J.gif",
    Gamer : "https://i.gifer.com/7V7J.gif"
  }

  const hotPicks = [
    {
      name : "Work Permit",
      image : workPermit
    },
    {
      name : "Skills",
      image : skills
    },
    {
      name : "Experience",
      image : experience
    },
    {
      name : "Certifications",
      image : certifications
    },
    {
      name : "Projects",
      image : projects
    },
    {
      name : "Contact Me",
      image : contactMe
    }
  ]

  const continueWatching = [
    {
      name : "Music",
      image : music
    },
    {
      name : "Reading",
      image : reading
    },
    {
      name : "Blogs",
      image : blogs
    },
    {
      name : 'Contact Me',
      image : readme
    }
  ]
  const {type} = useParams();
  console.log(type)
  const spotImg = spotlight[type]

  
    return(
        <>
           <div>
              <div className="position-relative">
                <img src={spotImg} className="spotlight"></img>
                <div className="position-absolute spotlight-content">
                  <h1>
                    Sai Ayyappa Akhil Pujari - Software Developer
                  </h1>
                  <p className="summary my-4 fw-bold">
                    A passionate software developer focused on building responsive and intuitive web applications. Skilled in React, JavaScript, HTML, and CSS, with a growing interest in backend technologies. I love turning ideas into code and continuously improving my craft. Currently exploring full-stack development to become a more versatile engineer. I’m always eager to take on new challenges and contribute to meaningful, user-centered projects.
                  </p>
                  <button className="btn btn-light me-4">
                    <i className="bi bi-play-fill me-2"></i>
                    Resume
                  </button>
                  <a href='https://www.linkedin.com/in/akhil-pujari' target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-secondary">
                    <i className="bi bi-info-circle me-2"></i>
                    Linked In
                  </button>
                  </a>
                </div>
              </div>
           </div>
           
           <div className="container-fluid">
            <h3 className="my-5 mx-3">Today's Hot Picks for Recruiter</h3>

            <div className="mx-3 mb-5 d-flex overflow-auto horizontal-scroll gap-3">

              {
                hotPicks.map((item,index) => {
                  return(
                    <>
                 
                  <div className="position-relative my-card mb-3" key={index}>
                    <img className="image-fluid rounded" 
                    src={item.image}
                    alt={item.name}
                    style={{ width: "280px" , height : "200px"}}
                    >
                    </img>
                    <div className="position-absolute cardTitle">
                      <p className="fs-6 fw-bold mb-1">{item.name}</p>
                    </div>
                </div>
               
                    </>
                  )
                })
              }
            </div>


            <h3 className="mx-3 mb-5 continue-watching">Continue Watching for Recruiter</h3>

            <div className="mx-3 mb-5 d-flex overflow-auto horizontal-scroll gap-3">

              {
                continueWatching.map((item,index) => {
                  return(
                    <>
                 
                  <div className="position-relative my-card mb-3" key={index}>
                    <img className="image-fluid rounded" 
                    src={item.image}
                    alt={item.name}
                    style={{ width: "280px" , height : "200px"}}
                    >
                    </img>
                    <div className="position-absolute cardTitle">
                      <p className="fs-6 fw-bold mb-1">{item.name}</p>
                    </div>
                </div>
               
                    </>
                  )
                })
              }
            </div>
           </div>
            
        </>
    )
}