import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import DocumentList from "./components/documentList";
import PageView from "./components/pageView";
import ScrollView from "./components/scrollView";

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DocumentList />} />
            <Route path="/page" element={<PageView />} />
            <Route path="/scroll" element={<ScrollView />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
