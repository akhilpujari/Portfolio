import React, { useState } from 'react';
import './Reading.css';

const Reading = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      excerpt: "A mystical story about following your dreams and listening to your heart.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Fiction",
      status: "Completed",
      link: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      excerpt: "A dystopian social science fiction novel that examines the consequences of totalitarianism.",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Dystopian",
      status: "Completed",
      link: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934"
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      excerpt: "A gripping tale of racial injustice and childhood innocence in the American South.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Classic",
      status: "Reading",
      link: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0061120081"
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      excerpt: "A tragic story of Jay Gatsby's pursuit of the American Dream during the Jazz Age.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Classic",
      status: "Completed",
      link: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567"
    },
    {
      id: 5,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      excerpt: "The first book in the magical series about a young wizard discovering his destiny.",
      image: "https://images-na.ssl-images-amazon.com/images/I/91l1Op79AWL.jpg",
      category: "Fantasy",
      status: "Completed",
      link: "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X"
    },
    {
      id: 6,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      excerpt: "An epic high fantasy adventure set in the world of Middle-earth.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Fantasy",
      status: "Reading",
      link: "https://www.amazon.com/Lord-Rings-J-R-R-Tolkien/dp/0544003411"
    },
    {
      id: 7,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      excerpt: "A romantic novel about the emotional development of protagonist Elizabeth Bennet.",
      image: "https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Classic",
      status: "Planning to Read",
      link: "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/0141439513"
    },
    {
      id: 8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      excerpt: "A fantasy novel about the adventures of hobbit Bilbo Baggins.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Fantasy",
      status: "Completed",
      link: "https://www.amazon.com/Hobbit-J-R-R-Tolkien/dp/054792822X"
    }
  ]);

  const openBookLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="reading-container mt-3">
      {/* Header Section */}
      <div className="reading-header">
        <div className="container">
          <h1 className="reading-title">My Reading Collection</h1>
          <p className="reading-subtitle">Books that have inspired, entertained, and shaped my perspective</p>
        </div>
      </div>

      {/* Books Grid */}
      <div className="reading-content">
        <div className="container">
          <div className="row">
            {books.map(book => (
              <div key={book.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="book-card">
                  <div className="book-cover">
                    <img src={book.image} alt={book.title} />
                    <div className="book-overlay">
                      <button 
                        className="btn btn-view"
                        onClick={() => openBookLink(book.link)}
                      >
                        View Book
                      </button>
                    </div>
                    <div className="book-status">
                      <span className={`status-badge ${book.status.replace(/\s+/g, '-').toLowerCase()}`}>
                        {book.status}
                      </span>
                    </div>
                  </div>
                  <div className="book-details">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-excerpt">{book.excerpt}</p>
                    <div className="book-meta">
                      <span className="book-category">{book.category}</span>
                    </div>
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

export default Reading;