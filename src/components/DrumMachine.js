import React from 'react';
import DrumPad from './DrumPad';

const DrumMachine = () => {
  
  const drumPads = [
    { id: 'Q', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { id: 'W', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { id: 'E', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    {id: 'A', audioSrc:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {id: 'S', audioSrc:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {id: 'D', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {id: 'Z', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {id: 'X', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {id: 'C', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
    // Add more drum pads here
  ];

  return (
    <div  id="drum-machine"className="container mt-5">
      <h1>Drum Machine By Umair</h1>
      <div  className="row">
        {drumPads.map((pad) => (
          <DrumPad key={pad.id} id={pad.id} audioSrc={pad.audioSrc} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;