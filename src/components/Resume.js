import React from 'react';
const file = require('../../misc/Daniel_Wasserman.pdf');
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

const Resume = props => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Document file="../../misc/Daniel_Wasserman.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;
