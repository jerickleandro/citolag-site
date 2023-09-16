import React from 'react';

function ButtonLink({ buttonText, externalURL }) {
  const handleButtonClick = () => {
    window.location.href = externalURL;
  };

  return (
    <button className="button" onClick={handleButtonClick}>
      <span className="button-text">{buttonText}</span>
      <span className="arrow">&#8594;</span>
    </button>
  );
}

export default ButtonLink;
