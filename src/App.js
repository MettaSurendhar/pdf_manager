import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Heropage from "./components/heropage";

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Heropage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
