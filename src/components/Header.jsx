import React from 'react';
import './header.css';
import Logo from './Logo';

function Header() {
  return (
    <header 
    id='header' className='header fixes-top d-flex align-items-center'>
      <Logo />
    </header>
  );
}

export default Header
