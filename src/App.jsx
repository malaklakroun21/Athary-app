import { Routes, Route } from "react-router-dom";
import React from "react";
import Email from "./pages/Email/Email";
import Gender from "./pages/Gender/Gender";

import Name from "./pages/Name/Name";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Gender />} />
      <Route path="/Email" element={<Email />} />
      <Route path="/Name" element={<Name />} />
    </Routes>
  );
}

export default App;

