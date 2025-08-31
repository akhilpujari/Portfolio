import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css'
import App from './App.jsx'
import Browse from './Browse.jsx'
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx'
import Intro from './Intro.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Blogs from './components/Blogs.jsx';
import ContactMe from './components/ContactMe.jsx';
import Reading from './components/Reading.jsx';
import Music from './components/Music.jsx';
import WorkPermit from './components/WorkPermit.jsx';
import Projects from './components/Projects.jsx';
import Gamer from './Gamer.jsx';

const approuter = createBrowserRouter([
  {
    path:'/',
    element:<Intro />
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  
  {
    path:'/profile',
    element:<App/>,
    children:[
      {
        path:"skills",
        element:<Skills/>
      },
      {
        path:"experience",
        element:<Experience/>
      },
      {
        path:"contactme",
        element:<ContactMe/>
      },
      {
        path:"music",
        element:<Music/>
      },
      {
        path:"reading",
        element:<Reading/>
      },
      {
        path:"blogs",
        element :<Blogs/>
      },
      {
        path:"workpermit",
        element :<WorkPermit/>
      },
      {
        path:"projects",
        element :<Projects/>
      },
      {
        path:"Gamer",
        element :<Gamer/>
      },
      {
        path:":type",
        element:<Content/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approuter}/>
  </StrictMode>,
)
