import React, { useState } from 'react';
import './Music.css';

const Music = () => {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Let it Happen",
      artist: "Tame Impala",
      album: "Currents",
      year: 2015,
      genre: "Psychedelic Pop",
      duration: "7:47",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "https://open.spotify.com/track/2X485T9Z5Ly0xyaghN73ed",
      featured: true
    },
    {
      id: 2,
      title: "Make Your Own Kind of Music",
      artist: "Cass Elliot",
      album: "Bubblegum",
      year: 1969,
      genre: "Pop",
      duration: "2:57",
      image: "https://www.stockmasters.pl/wp-content/uploads/2019/07/MAMA-477x475.jpg",
      link: "https://open.spotify.com/track/5B9aY42EdVeuPi3rbtL2lS",
      featured: false
    },
    {
      id: 3,
      title: "Apocalypse",
      artist: "Cigarettes After Sex",
      album: "Cigarettes After Sex",
      year: 2017,
      genre: "Dream Pop",
      duration: "4:50",
      image: "https://i.pinimg.com/originals/2f/b9/d1/2fb9d1458144251f7a12a0284e8fda36.jpg",
      link: "https://open.spotify.com/track/3AVrVz5rK8Hrqo9YGiVGN5",
      featured: false
    },
    {
      id: 4,
      title: "7 Years",
      artist: "Lukas Graham",
      album: "Lukas Graham (Blue Album)",
      year: 2015,
      genre: "Pop",
      duration: "3:57",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "https://open.spotify.com/track/5kqIPrATaCc2LqxVWzQGbk",
      featured: false
    },
    {
      id: 5,
      title: "505",
      artist: "Arctic Monkeys",
      album: "Favourite Worst Nightmare",
      year: 2007,
      genre: "Indie Rock",
      duration: "4:13",
      image: "https://i.pinimg.com/originals/2f/37/42/2f3742eaf9b09d10b4da245fbeba5882.jpg",
      link: "https://open.spotify.com/track/58ge6dfP91o9oXMzq3XkIS",
      featured: false
    },
    {
      id: 6,
      title: "The Less I Know The Better",
      artist: "Tame Impala",
      album: "Currents",
      year: 2015,
      genre: "Psychedelic Pop",
      duration: "3:36",
      image: "https://tse3.mm.bing.net/th/id/OIP.kKuBi6wQihuox7jw6GKHFgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
      featured: false
    }
  ]);

  const featuredSong = songs.find(song => song.featured);
  const otherSongs = songs.filter(song => !song.featured);

  const openSongLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const playSongPreview = () => {
    // This would typically connect to a music API for preview playback
    console.log("Playing song preview");
  };

  return (
    <div className="music-container">
      {/* Header Section */}
      <div className="music-header">
        <div className="container">
          <h1 className="music-title">My Music Universe</h1>
          <p className="music-subtitle">Songs that shape my mood, inspire my creativity, and fuel my coding sessions</p>
        </div>
      </div>

      {/* Featured Song */}
      {featuredSong && (
        <div className="featured-song">
          <div 
            className="featured-backdrop"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%), url(${featuredSong.image})` }}
          ></div>
          <div className="featured-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="featured-badge">Featured Track</div>
                  <h1 className="featured-song-title">{featuredSong.title}</h1>
                  <h2 className="featured-song-artist">{featuredSong.artist}</h2>
                  <div className="featured-meta">
                    <span className="meta-item">{featuredSong.album}</span>
                    <span className="meta-divider">•</span>
                    <span className="meta-item">{featuredSong.year}</span>
                    <span className="meta-divider">•</span>
                    <span className="meta-item">{featuredSong.genre}</span>
                  </div>
                  <p className="featured-description">
                    A mesmerizing journey through psychedelic soundscapes that builds with intensity, 
                    capturing the feeling of surrendering to life's unpredictable flow.
                  </p>
                  <div className="featured-buttons">
                    <button 
                      className="btn btn-netflix me-2"
                      onClick={() => openSongLink(featuredSong.link)}
                    >
                      <i className="bi bi-spotify me-2"></i> Listen on Spotify
                    </button>
                    <button className="btn btn-outline-light" onClick={playSongPreview}>
                      <i className="bi bi-play-circle me-2"></i> Play Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Songs Grid */}
      <div className="music-content">
        <div className="container">
          <h2 className="section-title">My Favorite Tracks</h2>
          <div className="row">
            {otherSongs.map(song => (
              <div key={song.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="song-card">
                  <div className="song-image">
                    <img src={song.image} alt={song.title} />
                    <div className="song-overlay">
                      <button 
                        className="btn btn-play"
                        onClick={() => openSongLink(song.link)}
                      >
                        <i className="bi bi-play-fill"></i>
                      </button>
                    </div>
                    <div className="song-duration">{song.duration}</div>
                  </div>
                  <div className="song-details">
                    <h3 className="song-title">{song.title}</h3>
                    <p className="song-artist">{song.artist}</p>
                    <div className="song-meta">
                      <span className="song-album">{song.album}</span>
                      <span className="song-year">{song.year}</span>
                    </div>
                    <div className="song-genre">{song.genre}</div>
                    <button 
                      className="btn btn-stream"
                      onClick={() => openSongLink(song.link)}
                    >
                      <i className="bi bi-music-note-beamed me-1"></i> Stream Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;