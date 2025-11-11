import capibara from './assets/recruiter.png'
import developer from './assets/Devloper.png'
import stalker from './assets/stalker.jpg'
import gamer from './assets/Gamer.jpg'
import { Link } from 'react-router-dom'


export default function Browse() {

    const users = [
        {
            name:'Recruiter',
            image: capibara
        },
        {
            name:'Developer',
            image: developer
        },
        {
            name:'Stalker',
            image: stalker
        },
        {
            name:'Gamer',
            image: gamer
        },
    ]


  return (
    <div className="container">
        <div className="row">
        <h1 className="text-white text-center py-5">Who's Watching?</h1>
      </div>
      <div className="row text-center">
        {users.map((item, index) => (
          <div key={index} className="col-6 col-md-6 col-lg-3 mb-4 px-0 user-select-none">
            <Link to={`/profile/${item.name}`}>
                <img
                className="img-fluid w-75 rounded profile"
                src={item.image}
                alt={item.name}
                style={{cursor:'pointer'}}
                />
            </Link>
            <h4 className="text-white mt-4" style={{cursor:'pointer'}}>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
