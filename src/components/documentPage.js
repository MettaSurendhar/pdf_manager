import React from "react";
import "../css/document.css";
import PageView from "./pageView";

function DocumentPage() {
  return (
    <div className="document-page">
      <div className="page">
        <div className="left-side">
          <div className="title">
            <label>Labels</label>
          </div>
          <div className="labels">
            <label>Title</label>
            <label>Author</label>
          </div>
          <div className="title">
            <label>Boxes</label>
          </div>
        </div>
        <div className="right-side">
          <PageView />
        </div>
      </div>
    </div>
  );
}

export default DocumentPage;
