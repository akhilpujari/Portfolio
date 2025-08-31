import { useState } from 'react';
import witcher3 from './assets/The Witcher 3_ Wild Hunt - title reveal.mp4';
import './Gamer.css';

const Gamer = () => {
  const [games, setGames] = useState([
    {
      id: 1,
      title: "The Witcher 3: Wild Hunt",
      genre: "Action RPG",
      platform: "PC/PS4",
      rating: 5,
      description: "An epic fantasy RPG with incredible storytelling, character development, and immersive world-building.",
      image: "https://images.unsplash.com/photo-1593305841689-05c059eca3ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      video: witcher3,
      featured: true
    },
    {
      id: 2,
      title: "God of War",
      genre: "Action Adventure",
      platform: "PS4/PS5",
      rating: 5,
      description: "A masterpiece that reimagines Norse mythology with breathtaking visuals and visceral combat.",
      image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Valorant",
      genre: "Tactical FPS",
      platform: "PC",
      rating: 4,
      description: "Competitive tactical shooter emphasizing precise gunplay and strategic team coordination.",
      image: "https://images3.alphacoders.com/129/1295906.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Red Dead Redemption 2",
      genre: "Western Action-Adventure",
      platform: "PC/PS4/Xbox",
      rating: 5,
      description: "Immersive wild west experience with unparalleled attention to detail and emotional storytelling.",
      image: "https://tse4.mm.bing.net/th/id/OIP.mAoODChTycWc5bkn9w5dQgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      featured: false
    },
    {
      id: 5,
      title: "Grand Theft Auto V",
      genre: "Action-Adventure",
      platform: "PC/PS4/PS5/Xbox",
      rating: 4,
      description: "Massive open-world game with incredible freedom and satirical storytelling.",
      image: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Assassin's Creed Odyssey",
      genre: "Action RPG",
      platform: "PC/PS4",
      rating: 4,
      description: "Beautiful journey through ancient Greece with engaging naval combat and RPG elements.",
      image: "https://wallpapers.com/images/featured/y8wyplzz300r1j6t.jpg",
      featured: false
    },
    {
      id: 7,
      title: "Overwatch 2",
      genre: "Hero Shooter",
      platform: "PC",
      rating: 4,
      description: "Team-based shooter with diverse heroes, vibrant visuals, and fast-paced gameplay.",
      image: "https://beanstalk.io/wp-content/uploads/2022/10/overwatch-2.jpg",
      featured: false
    },
    {
      id: 8,
      title: "Dead by Daylight",
      genre: "Survival Horror",
      platform: "PC/PS4",
      rating: 4,
      description: "Asymmetric horror game where survivors try to escape from a powerful killer.",
      image: "https://images.wallpapersden.com/image/download/dead-by-daylight-hd-gaming-2022_bWhua26UmZqaraWkpJRnZWVlrWZqbm4.jpg",
      featured: false
    },
    {
      id: 9,
      title: "Far Cry 5",
      genre: "First-person Shooter",
      platform: "PC/PS4",
      rating: 4,
      description: "Open-world FPS set in rural Montana with compelling storyline and environments.",
      image: "https://tse2.mm.bing.net/th/id/OIP.-32daa6CdDsfD-Od6ALVpAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      featured: false
    },
    {
      id: 10,
      title: "Max Payne 3",
      genre: "Third-person Shooter",
      platform: "PC/PS3",
      rating: 4,
      description: "Gritty cinematic shooter with revolutionary bullet time mechanics and dark story.",
      image: "https://tse4.mm.bing.net/th/id/OIP.0kdiiJh9i9O8wIGCyVRongHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      featured: false
    },
    {
      id: 11,
      title: "Mortal Kombat 11",
      genre: "Fighting",
      platform: "PC/PS4",
      rating: 4,
      description: "Brutal fighting game with fantastic visuals, deep mechanics, and iconic characters.",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202009/1021/qar5njlplZfP3coBOKbWDsLJ.jpg",
      featured: false
    }
  ]);

  const featuredGame = games.find(game => game.featured);
  const otherGames = games.filter(game => !game.featured);

  const renderRating = (rating) => {
    return (
      <div className="game-rating">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'}`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <div className="gamer-container mt-5">

      {/* Featured Game with Video Spotlight */}
      {featuredGame && (
        <div className="featured-game">
          <div className="video-overlay"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="featured-video"
          >
            <source src={featuredGame.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="featured-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="featured-badge">Featured Game</div>
                  <h1 className="featured-game-title">{featuredGame.title}</h1>
                  <h2 className="featured-game-genre">{featuredGame.genre}</h2>
                  <div className="featured-meta">
                    <span className="meta-item">{featuredGame.platform}</span>
                    <span className="meta-divider">•</span>
                    <span className="meta-item">{renderRating(featuredGame.rating)}</span>
                  </div>
                  <p className="featured-description">
                    {featuredGame.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Game Library */}
      <div className="game-library">
        <div className="container">
          <h2 className="section-title">Game Library</h2>
          <p className="section-subtitle">A curated collection of games I enjoy</p>

          {/* Games Grid */}
          <div className="games-grid">
            <div className="row">
              {otherGames.map(game => (
                <div key={game.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="game-card">
                    <div className="game-image">
                      <img src={game.image} alt={game.title} />
                      <div className="game-overlay">
                        <div className="game-platforms">
                          {game.platform.split('/').map(platform => (
                            <span key={platform} className="platform-tag">{platform}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="game-details">
                      <h3 className="game-title">{game.title}</h3>
                      <p className="game-genre">{game.genre}</p>
                      <div className="game-meta">
                        {renderRating(game.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gaming Philosophy */}
      <div className="gaming-philosophy">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="section-title">Why I Game</h2>
              <div className="philosophy-content">
                <p>
                  Gaming represents more than entertainment—it's a source of inspiration and 
                  a way to experience compelling narratives. The strategic thinking in competitive 
                  games and problem-solving in RPGs often parallel challenges in software development.
                </p>
                <p>
                  From exploring immersive worlds to coordinated team play, gaming has cultivated 
                  skills in perseverance, creative thinking, and systematic analysis that complement 
                  my professional work as a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamer;