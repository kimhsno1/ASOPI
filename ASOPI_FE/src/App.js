import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";


function App() {
  return (
    <div className="App">

      {/* 경로 정의 */}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;