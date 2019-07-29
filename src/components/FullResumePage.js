import React from 'react';
import { Link } from 'react-router-dom';
import Resume from './Resume';

const FullResumePage = props => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Link
        style={{ margin: '10px' }}
        to="../../misc/Daniel_Wasserman.pdf"
        target="_blank"
        download
      >
        Click to Download
      </Link>
      <Resume />
    </div>
  );
};

export default FullResumePage;
