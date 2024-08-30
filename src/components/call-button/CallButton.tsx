import React from 'react';
import './call-button.scss';
import { Link } from 'react-router-dom';

export default function CallButton() {
  return (
    <Link to="https://calendly.com/usataxes" className="pulse-button">
      <p>записаться на интервью</p>
    </Link>
  );
}
