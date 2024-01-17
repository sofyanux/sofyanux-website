import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -10px;
  width: 100%;
`;

const PortfolioCard = styled(Link)`
  position: relative;
  max-height: 190px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
  min-width: calc(30%);
  box-sizing: border-box;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;

  &:hover {
    cursor: url(images/cursor/cursor.png), auto;
    .arrow-icon {
      transform: rotate(0deg);
    }
  }

  @media (max-width: 767px) {
    flex: 1 1 calc(100%);
    margin: 0;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
`;

const Thumbnail = styled.img`
  width: 150px;
  height: auto;
  border-radius: 6px;
  margin-bottom: 15px;
  transition: width 0.5s ease-in-out;
  &:hover {
    width: 250px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
`;

const PortfolioCategory = styled.h3`
  font-size: 0.8em;
  margin-bottom: 10px;
  color: #333;
  background-color: #4caf50;
  color: #fff;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 4px 0 0 4px;
  position: absolute;
  top: 0;
  right: 0;
`;

const PortfolioTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;
`;

const PortfolioDescription = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
`;

const ArrowIcon = styled(FaArrowRight)`
  background-color: #fff;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 100%;
  color: #4caf50;
  padding: 8px;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.4s ease-in-out;
  transform: rotate(-45deg);

  &:hover {
    color: #45a049;
  }
`;

const portfolios = [
  {
    id: 1,
    title: "Coffee Shop App",
    category: "UI/UX Design",
    description: "Description of Project 1",
    thumbnail: "/images/avatar.jpg",
    slug: "coffee-shop-app",
    heroImages: [
      "/images/avatar.jpg",
      "/images/cursor/cursor-backtop.png",
      "/images/avatar.jpg",
      "/images/cursor/cursor.png",
    ],
  },
  {
    id: 2,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-2",
    heroImages: [
      "/images/avatar.jpg",
      "/images/avatar.jpg",
      "/images/avatar.jpg",
    ],
  },
  {
    id: 3,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-3",
  },
  {
    id: 4,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-4",
  },
  {
    id: 5,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-5",
  },
  {
    id: 6,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-6",
  },
  {
    id: 7,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-7",
  },
  {
    id: 8,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-8",
  },
  {
    id: 9,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-9",
  },
  {
    id: 10,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-10",
  },
  {
    id: 11,
    title: "Project ",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-11",
  },
  {
    id: 12,
    title: "Project 2",
    category: "UI/UX Design",
    description: "Description of Project 2",
    thumbnail: "/images/avatar.jpg",
    slug: "project-12",
  },
];

const PortfolioList = () => {
  return (
    <PortfolioContainer>
      {portfolios.map((portfolio) => (
        <PortfolioCard key={portfolio.id} to={`/portfolio/${portfolio.slug}`}>
          <TextContainer>
            <PortfolioCategory>{portfolio.category}</PortfolioCategory>
            <PortfolioTitle>{portfolio.title}</PortfolioTitle>
            <PortfolioDescription>{portfolio.description}</PortfolioDescription>
            <ArrowIcon className="arrow-icon" />
          </TextContainer>
          <Thumbnail src={portfolio.thumbnail} alt={portfolio.title} />
        </PortfolioCard>
      ))}
    </PortfolioContainer>
  );
};

export default PortfolioList;
export { portfolios };
