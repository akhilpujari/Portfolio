import  { useState } from 'react';
import './Blogs.css';

const Blogs= () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "CSS-Tricks: Web Development Guides",
      excerpt: "The ultimate resource for web developers with tutorials, articles, and almanac on all things CSS and front-end development.",
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web Development",
      readTime: "10 min read",
      link: "https://css-tricks.com",
      featured: true
    },
    {
      id: 2,
      title: "Smashing Magazine",
      excerpt: "For professional web designers and developers, with a focus on useful techniques and best practices.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web Design",
      readTime: "15 min read",
      link: "https://www.smashingmagazine.com",
      featured: false
    },
    {
      id: 3,
      title: "Dev.to Community",
      excerpt: "A community of software developers getting together to help one another out.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Programming",
      readTime: "7 min read",
      link: "https://dev.to",
      featured: false
    },
    {
      id: 4,
      title: "FreeCodeCamp News",
      excerpt: "Learn to code with free online courses, programming projects, and interview preparation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Coding",
      readTime: "12 min read",
      link: "https://www.freecodecamp.org/news",
      featured: false
    },
    {
      id: 5,
      title: "React Official Blog",
      excerpt: "The official React blog with updates, release notes, and deep dives into React features.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "React",
      readTime: "8 min read",
      link: "https://reactjs.org/blog",
      featured: false
    },
    {
      id: 6,
      title: "UX Collective",
      excerpt: "Curated stories on user experience, usability, and product design.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Design",
      readTime: "9 min read",
      link: "https://uxdesign.cc",
      featured: false
    },
    {
      id: 7,
      title: "JavaScript Weekly",
      excerpt: "A weekly newsletter of the best JavaScript news, articles, and projects.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "JavaScript",
      readTime: "5 min read",
      link: "https://javascriptweekly.com",
      featured: false
    },
    {
      id: 8,
      title: "CSS Weekly",
      excerpt: "Weekly e-roundup of css articles, tutorials, experiments and tools.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "CSS",
      readTime: "6 min read",
      link: "https://css-weekly.com",
      featured: false
    },
    {
      id: 9,
      title: "Frontend Focus",
      excerpt: "A once–weekly roundup of the best front-end news, articles and tutorials.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Frontend",
      readTime: "7 min read",
      link: "https://frontendfoc.us",
      featured: false
    },
    {
      id: 10,
      title: "Web.dev by Google",
      excerpt: "Get the web's modern capabilities on your own sites and apps with useful guidance and analysis.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web Development",
      readTime: "11 min read",
      link: "https://web.dev",
      featured: false
    },
    {
      id: 11,
      title: "A List Apart",
      excerpt: "For people who make websites - exploring the design, development, and meaning of web content.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web Design",
      readTime: "14 min read",
      link: "https://alistapart.com",
      featured: false
    },
    {
      id: 12,
      title: "Codrops",
      excerpt: "Web design and development blog that publishes articles and tutorials about the latest web trends.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web Development",
      readTime: "10 min read",
      link: "https://tympanus.net/codrops",
      featured: false
    }
  ]);

  const featuredBlog = blogs.find(blog => blog.featured);
  const otherBlogs = blogs.filter(blog => !blog.featured);

  // Function to open blog links
  const openBlogLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="netflix-blogs">
      {/* Header Section */}
      <div className="blogs-header">
        <div className="container">
          <h1 className="main-title">My Reading List</h1>
          <p className="subtitle">A curated collection of web development blogs and resources I follow</p>
        </div>
      </div>

      {/* Featured Blog */}
      {featuredBlog && (
        <div className="featured-blog">
          <div 
            className="featured-backdrop"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%), url(${featuredBlog.image})` }}
          ></div>
          <div className="featured-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="featured-title">{featuredBlog.title}</h1>
                  <div className="featured-meta">
                    <span className="badge bg-netflix me-2">{featuredBlog.category}</span>
                    <span>{featuredBlog.readTime}</span>
                  </div>
                  <p className="featured-excerpt">{featuredBlog.excerpt}</p>
                  <div className="featured-buttons">
                    <button 
                      className="btn btn-netflix me-2"
                      onClick={() => openBlogLink(featuredBlog.link)}
                    >
                      <i className="bi bi-play-fill me-1"></i> Visit Site
                    </button>
                    <button className="btn btn-outline-light">
                      <i className="bi bi-bookmark me-1"></i> Save for Later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Categories */}
      <div className="blog-categories">
        <div className="container">
          <h2 className="category-title">Web Development & Design</h2>
          <div className="blog-row">
            {otherBlogs.filter(b => b.category === "Web Development" || b.category === "Web Design").map(blog => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}>
                  <div className="blog-overlay">
                    <button 
                      className="btn btn-sm btn-netflix"
                      onClick={() => openBlogLink(blog.link)}
                    >
                      Visit
                    </button>
                  </div>
                </div>
                <div className="blog-info">
                  <h5 className="blog-title">{blog.title}</h5>
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="category-title">Frontend Technologies</h2>
          <div className="blog-row">
            {otherBlogs.filter(b => b.category === "React" || b.category === "JavaScript" || b.category === "CSS").map(blog => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}>
                  <div className="blog-overlay">
                    <button 
                      className="btn btn-sm btn-netflix"
                      onClick={() => openBlogLink(blog.link)}
                    >
                      Visit
                    </button>
                  </div>
                </div>
                <div className="blog-info">
                  <h5 className="blog-title">{blog.title}</h5>
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="category-title">Programming & Coding</h2>
          <div className="blog-row">
            {otherBlogs.filter(b => b.category === "Programming" || b.category === "Coding" || b.category === "Frontend").map(blog => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}>
                  <div className="blog-overlay">
                    <button 
                      className="btn btn-sm btn-netflix"
                      onClick={() => openBlogLink(blog.link)}
                    >
                      Visit
                    </button>
                  </div>
                </div>
                <div className="blog-info">
                  <h5 className="blog-title">{blog.title}</h5>
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="category-title">UI/UX Design</h2>
          <div className="blog-row">
            {otherBlogs.filter(b => b.category === "Design").map(blog => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}>
                  <div className="blog-overlay">
                    <button 
                      className="btn btn-sm btn-netflix"
                      onClick={() => openBlogLink(blog.link)}
                    >
                      Visit
                    </button>
                  </div>
                </div>
                <div className="blog-info">
                  <h5 className="blog-title">{blog.title}</h5>
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
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

export default Blogs;