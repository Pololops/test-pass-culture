import "./App.css";

import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import PageArticles from "../PageArticles/PageArticles";
import PageCreateNews from "../PageCreateNews/PageCreateNews";
import Footer from "../Footer/Footer";

function App() {
  
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<PageArticles />}  />
        <Route path="/create" element={<PageCreateNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
