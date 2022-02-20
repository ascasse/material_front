import React from 'react';
import logo from '../logo.svg'
import { Link } from 'react-router-dom';
import { FrontRoutes } from '../AppRoutes';

const Home = () => {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to={FrontRoutes.recent}>Learning</Link>
          </header>
        </div>
      );
}

export default Home
