import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Application</h1>
      <nav>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/reviews">Submit Review</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
