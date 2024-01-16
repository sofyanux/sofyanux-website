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
    background-image: radial-gradient(rgb(220, 220, 220) 1px, rgb(253, 253, 253) 1.3px);
    background-color: rgb(253, 253, 253);
    opacity: 1;
    background-size: 15px 15px;
    cursor: url(images/cursor-normal.png), auto;
  }
`;

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolios" element={<PortfolioList />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
