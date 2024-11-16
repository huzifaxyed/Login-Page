import React, { useState } from "react";
import "./App.css";
import UserContext from "./userContext";
import RequireAuth from "./routes/RequireAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login"; // Ensure this path is correct
import Signup from "./routes/Signup"; // Ensure this path is correct
import Todos from "./routes/Todos"; // Ensure this path is correct
import Navbar from "./Navbar"; // Ensure this path is correct
import Home from "./routes/Home";

function App() {
  let [user, setUser] = useState();
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="todos"
              element={
                <RequireAuth>
                  <Todos />
                </RequireAuth>
              }
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
