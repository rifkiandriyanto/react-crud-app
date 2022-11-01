import React from 'react';
import Navigation from './Navigation';
// import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className='main-header'>
      <h1>Login App</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
