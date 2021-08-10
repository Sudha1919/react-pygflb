import React from 'react';
import styles from './mystyle.module.css';
import { Link } from 'react-router-dom';
function ReactNav() {
  return (
    <ul className={styles.reactNav}>
      <li>
        <Link to="/documents">Docs</Link>
      </li>
      <li>
        <Link to="/tutorial">Tutorial</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}
export default ReactNav;
