import React from "react";
import styled from "styled-components";
import PortfolioList from "./PortfolioList";

const Container = styled.div`
  text-align: center;
  margin: 50px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  margin-bottom: 15px;
`;

const HomePage = () => {
  // Replace with your actual data
  const profileImageURL = "url_to_your_profile_image";
  const fullName = "Your Name";
  const role = "UI/UX Designer & Web Developer";

  return (
    <Container>
      <img
        src={profileImageURL}
        alt="Your Profile"
        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
      />
      <Title>{fullName}</Title>
      <Subtitle>{role}</Subtitle>
      <Paragraph>Selamat datang di halaman portofolio saya.</Paragraph>
      <PortfolioList />
    </Container>
  );
};

export default HomePage;
