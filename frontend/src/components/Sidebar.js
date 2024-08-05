import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/books" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Books
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/members" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Members
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/transactions" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
