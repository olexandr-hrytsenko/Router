import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <p><NavLink to="/">Home</NavLink></p>
      <p><NavLink to="/about">About</NavLink></p>
      <p><NavLink to="/contact">Contact</NavLink></p>
    </div>
  );
};

export default Navigation;