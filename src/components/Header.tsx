import React from 'react';
import ImageLogo from '../assets/logo.webp';

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <img src={ImageLogo} alt="Logo" width="150px" height="87px" />
      </div>
    </div>
  );
}
