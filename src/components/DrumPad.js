
import React, { useState, useEffect } from 'react';

const DrumPad = ({ id, audioSrc }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === id.toLowerCase()) {
        playSound();
        setIsActive(true);
        setTimeout(() => {
          setIsActive(false);
        }, 500);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [id]);

  const playSound = () => {
    const audioElement = document.getElementById(id);
    audioElement.play();
  };

  const handleClick = () => {
    playSound();
    setIsActive(true);

    // Reset the active state after a short delay
    setTimeout(() => {
      setIsActive(false);
    }, 500);
  };

  const drumPad = isActive ? 'drum-pad btn btn-primary active' : 'drum-pad btn btn-primary';

  return (
    <div id="display" className="col-md-4 mt-3">
           
           <button  className={drumPad}
        onClick={handleClick}> {id}
        <audio id={id} src={audioSrc} /></button>
      </div>

  );
};

export default DrumPad;