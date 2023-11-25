import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./Alert";
import Login from "./Login";
import AppComponent from "./AppComponent";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/content" element={<AppComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
