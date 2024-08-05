import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><NavLink to="/" activeClassName="active">DASHBOARD</NavLink></li>
        <li><NavLink to="/books" activeClassName="active">ADD BOOKS</NavLink></li>
        <li><NavLink to="/members" activeClassName="active">MEMBERS</NavLink></li>
        <li><NavLink to="/transactions" activeClassName="active">TRANSACTIONS</NavLink></li>
        <li><NavLink to="/settings" activeClassName="active">SETTINGS</NavLink></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
