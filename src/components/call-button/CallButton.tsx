import React from 'react';
import './call-button.scss';
import { Link } from 'react-router-dom';

export default function CallButton() {
  return (
    <Link to="/" className="pulse-button">
      Успей записаться осталось мало мест.
    </Link>
  );
}
