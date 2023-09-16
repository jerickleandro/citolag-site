import React from 'react';
import './retangulo.css';
import Image from 'next/image';

function Retangulo({ title, text, buttonText, iconPath }) {
  return (
    <div className="container">
      <div className="rectangle">
        <div className="circle">
          <Image src={iconPath} width={33} height={44} alt="" />
        </div>
        <p className="title" style={{ marginBottom: '0px' }}>{title}</p>
        <p className="text">{text}</p>
        <div className="button-container">
          <button className="button">
            <span className="button-text">{buttonText}</span>
            <span className="arrow">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Retangulo;
