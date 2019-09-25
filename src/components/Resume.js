import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const resume = require('./misc/Daniel_Wasserman.pdf');

const Resume = props => {
  return (
    <Document file={resume}>
      <Page pageNumber={1} scale={2} />
    </Document>
  );
};

export default Resume;
