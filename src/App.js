import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./Alert";
import Login from "./Login";
import AppComponent from "./AppComponent";
import UserContextProvider from "./context/UserContextProvider";
import Card from "./Card";

function App() {
  return (
    <UserContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/content" element={<AppComponent />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;
