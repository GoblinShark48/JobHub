import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
import smallLogo from '../assets/lunchboxlogosmall.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Recipe = () => {
  return (
    <div>
      <header className="header">
        <h1>Recipe</h1>
      </header>
      <div>{/* Recipe details here */}</div>
    </div>
  );
};

export default Recipe;
