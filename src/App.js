import React from 'react';
import './style.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//components
import styles from './components/mystyle.module.css';
import ReactNav from './components/ReactNav';
import ReactSearch from './components/ReactSearch';
import Mainpage from './components/Modules/Mainpage';
import Docs from './components/Modules/Docs';
import Tutorial from './components/Modules/Tutorial';
import Blog from './components/Modules/Blog';
import Contact from './components/Modules/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.reactheader}>
        <h1>
          <Link to="/">React JS</Link>
        </h1>
        <ReactNav />
        <ReactSearch />
      </div>
      <Route path="/" component={Mainpage} exact />
      <Route path="/documents" component={Docs} />
    
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}
export default App;
