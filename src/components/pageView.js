import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "../css/pageView.css";

function PageView() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  const changePage = (offset) => {
    setPageNumber((prevValue) => prevValue + offset);
  };
  const changeNext = () => {
    changePage(1);
  };
  const changePrev = () => {
    changePage(-1);
  };
  return (
    <>
      <div className="page_container">
        <div className="page_item">
          <Document file="./sample2.pdf" onLoadSuccess={onDocLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
      <p>
        page {pageNumber} of {numPages}
      </p>
      {pageNumber < numPages && <button onClick={changeNext}>next</button>}
      {pageNumber > 1 && <button onClick={changePrev}>prev</button>}
    </>
  );
}

export default PageView;
