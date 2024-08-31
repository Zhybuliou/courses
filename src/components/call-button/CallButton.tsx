import React from 'react';
import './call-button.scss';
import { Link } from 'react-router-dom';

export default function CallButton() {
  return (
    <Link to="https://buy.stripe.com/8wMdSqevBdvy9oceUU" target="blank" className="pulse-button">
      <p>Оплатить сейчас</p>
    </Link>
  );
}
