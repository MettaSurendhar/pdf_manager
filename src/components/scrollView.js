import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "../css/scrollView.css";

function ScrollView() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  return (
    <>
      <div className="scroll_container">
        <Document file="./sample2.pdf" onLoadSuccess={onDocLoadSuccess}>
          {Array.from(new Array(numPages), (element, index) => (
            <Page
              className="scroll_item"
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ))}
        </Document>
      </div>
    </>
  );
}

export default ScrollView;
