// PortfolioDetail.js
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { portfolios } from "./PortfolioList";
import ScrollToTopButton from "./ScrollToTopButton";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const DetailTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const DetailCategory = styled.h3`
  font-size: 1em;
  color: #4caf50;
  margin-bottom: 10px;
`;

const DetailDescription = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
`;

const PortfolioDetail = () => {
  const { id } = useParams();

  // Find the specific portfolio item based on ID
  const selectedPortfolio = portfolios.find(
    (portfolio) => portfolio.id === parseInt(id)
  );

  if (!selectedPortfolio) {
    return <div>Portfolio not found</div>;
  }

  return (
    <DetailContainer>
      <DetailTitle>{selectedPortfolio.title}</DetailTitle>
      <DetailCategory>{selectedPortfolio.category}</DetailCategory>
      <DetailDescription>{selectedPortfolio.description}</DetailDescription>
      {/* Add additional details you want to display */}
      <img src={selectedPortfolio.thumbnail} alt={selectedPortfolio.title} />
      <ScrollToTopButton />
    </DetailContainer>
  );
};

export default PortfolioDetail;
