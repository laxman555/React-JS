import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';


function Header() {


  return (
    <>
      <AppBar position="static">
        <h2 className='app-title'>Online Souq</h2>
      </AppBar>
    </>
  );
}

export default Header;
