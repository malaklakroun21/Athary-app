import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Email from "./pages/Email/Email";
import Gender from "./pages/Gender/Gender";
import Name from "./pages/Name/Name";
import Check from "./pages/Check/Check";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gender />} />
      <Route path="/Email" element={<Email />} />
      <Route path="/Name" element={<Name />} />
      <Route path="/Check" element={<Check />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
