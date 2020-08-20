import React from 'react';
import headerLogo from '../images/header-logo.svg';

function Header() {
  // Возвращаем JSX-разметку компонента Header
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="логотип Mesto Russia" />
    </header>
  );
}

export default Header;
