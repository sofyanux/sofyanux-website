// PortfolioDetail.js
import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { useParams } from "react-router-dom";
import { portfolios } from "./PortfolioList";
import ContactPage from "./ContactPage";
import ScrollToTopButton from "./ScrollToTopButton";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 24px;
  border: 1px solid #ddd;

  @media (max-width: 767px) {
    border-radius: 0;
  }
`;

const moveUpDown1 = keyframes`
  from {
    transform: translateY(2%);
  }
  to {
    transform: translateY(-5%);
  }
`;

const moveUpDown2 = keyframes`
  from {
    transform: translateY(-5%);
  }
  to {
    transform: translateY(-10%);
  }
`;

const moveUpDown3 = keyframes`
  from {
    transform: translateY(5%);
  }
  to {
    transform: translateY(-5%);
  }
`;

const HeroImagesContainer = styled.div`
  overflow: hidden;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: start;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 30px;
  gap: 20px;
  align-items: start;

  @media (max-width: 767px) {
    padding: 20px;
  }
`;

const HeroImage = styled.img`
  max-width: calc(33.33% - 20px);
  height: auto;
  margin-top: 50px;
  transition: opacity 0.5s ease-in-out;
  animation: ${(props) =>
      props.$index === 0
        ? moveUpDown1
        : props.$index === 1
        ? moveUpDown2
        : moveUpDown3}
    4s infinite alternate ease-in-out;

  @media (max-width: 767px) {
    max-width: calc(80% - 20px);
  }
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

const Image1 = styled.img`
  max-width: calc(33.33% - 20px);
  height: auto;
  margin-bottom: 15px;
  border-radius: 16px;
  
  @media (max-width: 767px) {
    max-width: calc(100%);
  }
`;
const Image2 = styled.img`
  max-width: calc(33.33% - 20px);
  border-radius: 16px;
  box-sizing: border-box;
  
  @media (max-width: 767px) {
    max-width: calc(100%);
  }
`;

const Footer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
`;

const PortfolioDetail = () => {
  const { slug } = useParams();
  const cleanedSlug = slug
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "-")
    .trim();

  // Find the specific portfolio item based on slug
  const selectedPortfolio = portfolios.find(
    (portfolio) => portfolio.slug === cleanedSlug
  );

  const [visibleImageIndex, setVisibleImageIndex] = useState(0);

  // Hitung jumlah gambar yang akan ditampilkan
  const numberOfImages = Math.min(
    4,
    selectedPortfolio?.heroImages?.length || 0
  );

  const visibleImages = selectedPortfolio.heroImages.slice(0, numberOfImages);

  // Fungsi untuk mengacak indeks gambar
  const getRandomIndex = useCallback(
    () => Math.floor(Math.random() * numberOfImages),
    [numberOfImages]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImageIndex(getRandomIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [getRandomIndex]);

  if (!selectedPortfolio || !selectedPortfolio.heroImages) {
    return <div>Portfolio not found or missing heroImages</div>;
  }

  return (
    <div>
      {/* Hero Images Container */}
      <HeroImagesContainer>
        {visibleImages.map((image, index) => (
          <HeroImage
            key={index}
            src={image}
            alt={selectedPortfolio.title}
            $visible={visibleImageIndex === index}
            $index={index} // Menyimpan indeks gambar pada prop $index
          />
        ))}
      </HeroImagesContainer>

      {/* Rest of the Detail Container */}
      <DetailContainer>
        <DetailTitle>{selectedPortfolio.title}</DetailTitle>
        <DetailCategory>{selectedPortfolio.category}</DetailCategory>
        <DetailDescription>{selectedPortfolio.description}</DetailDescription>
        <Image1
          src={selectedPortfolio.thumbnail}
          alt={selectedPortfolio.title}
        />
      </DetailContainer>
      <ImagesContainer>
        <Image2
          src={selectedPortfolio.thumbnail}
          alt={selectedPortfolio.title}
        />
        <Image2
          src={selectedPortfolio.thumbnail}
          alt={selectedPortfolio.title}
        />
        <Image2
          src={selectedPortfolio.thumbnail}
          alt={selectedPortfolio.title}
        />
        <Image2
          src={selectedPortfolio.thumbnail}
          alt={selectedPortfolio.title}
        />
      </ImagesContainer>
      <Footer>
        <ContactPage />
      </Footer>
      <ScrollToTopButton />
    </div>
  );
};

export default PortfolioDetail;
