import React from "react";
import styled from "styled-components";
import PortfolioList from "./PortfolioList";
import ContactPage from "./ContactPage";
import ScrollToTopButton from "./ScrollToTopButton";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;

  @media (max-width: 767px) {
    margin: 20px !important;
  }
  `;
  
  const Title = styled.h1`
  font-size: 2em;
  margin-bottom: -20px;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 8px;
  color: #555;
  `;
  
  const Paragraph = styled.p`
  font-size: 1.2em;
  width: 50%;
  margin-top: 32px;
  margin-bottom: 15px;
  
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const HomePage = () => {
  const profileImageURL = "images/avatar.jpg";
  const fullName = "Sofyan Sauri";
  const role = "UI/UX Designer & Web Developer";

  return (
    <Container>
      <img
        src={profileImageURL}
        alt="Sofyan UX Avatar"
        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
      />
      <Title>{fullName}</Title>
      <Subtitle>{role}</Subtitle>
      <ContactPage />
      <Paragraph>
        Welcome to Sofyan UX! I'm specialize in innovative UI design and
        responsive website development. Lets turn your vision into a
        captivating digital experience together!
      </Paragraph>
      <PortfolioList />
      <ScrollToTopButton />
    </Container>
  );
};

export default HomePage;
