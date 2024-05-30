import React from 'react';
import ImageLogo from '../assets/logo.webp';

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div>
          <img src={ImageLogo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
