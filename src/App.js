// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PortfolioList from "./components/PortfolioList";
import PortfolioDetail from "./components/PortfolioDetail";
import ContactPage from "./components/ContactPage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-image: radial-gradient(rgb(220, 220, 220) 1px, rgb(253, 253, 253) 1.3px);
    background-color: rgb(253, 253, 253);
    opacity: 1;
    background-size: 15px 15px;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolios" element={<PortfolioList />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
