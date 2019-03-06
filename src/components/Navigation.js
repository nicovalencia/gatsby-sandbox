import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/page1">Page 1</Link>
    </li>
    <li>
      <Link to="/page2">Page 2</Link>
    </li>
    <li>
      <Link to="/my-files">My Files</Link>
    </li>
  </ul>
);

export default Navigation;
