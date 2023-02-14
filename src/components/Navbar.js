import React from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css";

export const Navbar = () => {
  return (
    <nav>
        <h1>AG-Grid</h1>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/grid"><li>Grid</li></NavLink>
        </ul>
    </nav>
  )
}
