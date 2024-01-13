// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const funFacts = [
  "Did you know? The first computer programmer was a woman named Ada Lovelace.",
  "Fun fact: The first computer mouse was made of wood.",
  "Did you know? The first domain name ever registered was Symbolics.com.",
  "Fun fact: More than 570 new websites are created every minute."
];

const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p>{randomFact}</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default NotFound;
