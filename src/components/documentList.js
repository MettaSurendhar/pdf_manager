import React from "react";
import "../css/document.css";

function DocumentList() {
  return (
    <div className="hero-page">
      <div className="title">
        <label>Documents</label>
      </div>
      <div className="list">
        <a href="#">- sample document 1.pdf</a>
        <a href="#">- sample document 2.pdf</a>
        <a href="#">- sample document 3.pdf</a>
      </div>
    </div>
  );
}

export default DocumentList;
