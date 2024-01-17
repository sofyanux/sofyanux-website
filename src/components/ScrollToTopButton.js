import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollToTopButtonContainer = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};

  &:hover {
    background-color: #007bff;
    color: #fff;
    cursor: url(images/cursor-backtop.png), auto;
  }
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopButtonContainer
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
      }}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </ScrollToTopButtonContainer>
  );
};

export default ScrollToTopButton;
