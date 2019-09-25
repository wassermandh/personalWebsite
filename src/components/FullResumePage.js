import React from 'react';
import { Link } from 'react-router-dom';
import Resume from './Resume';

const FullResumePage = props => {
  return (
    <div id="resumeContainer">
      <Link to="/misc/Daniel_Wasserman.pdf" target="_blank" download>
        <h2>Click to Download</h2>
      </Link>
      <Resume />
    </div>
  );
};

export default FullResumePage;
