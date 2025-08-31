import React from 'react';

const ColorModeToggle = ({ colorMode, setColorMode }) => {
  const handleColorChange = (mode) => {
    setColorMode(mode);
    localStorage.setItem('color', mode);
  };

  return (
    <div className="color-mode-toggle">
      <div 
        className={colorMode === 'black' ? 'active' : ''} 
        onClick={() => handleColorChange('black')}
      >
        <i className="fa-solid fa-moon"></i>
      </div>
      <div 
        className={colorMode === 'white' ? 'active' : ''} 
        onClick={() => handleColorChange('white')}
      >
        <i className="fa-solid fa-sun"></i>
      </div>
    </div>
  );
};

export default ColorModeToggle;