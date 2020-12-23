import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <nav id="header">
      <ul>
        <li>
          <NavLink to="/">Produtos</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
