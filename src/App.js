import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import basic styles
import './Styles/Styles.css'


import MainLayout from "./Layout/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={"login"} />
        <Route path="/*" element={<MainLayout />} />

      </Routes>
    </BrowserRouter>
  );
}