import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

// material ui
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import Search from '../../components/search/search';

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/Images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img alt='google-logo' src='https://www.google.com/logos/doodles/2021/get-vaccinated-wear-a-mask-save-lives-june-1-6753651837109278-2xa.gif' />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
      
    </div>
  );
}

export default Home;