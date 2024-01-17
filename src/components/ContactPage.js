import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
import styled from "styled-components";

const ContactContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SocialContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Contact = styled.div`
  text-align: center;
  margin-top: -20px;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }

  &.linkedin {
    cursor: url(images/cursor/cursor-linkedin.png), auto;
  }

  &.instagram {
    cursor: url(images/cursor/cursor-instagram.png), auto;
  }

  &.behance {
    cursor: url(images/cursor/cursor-behance.png), auto;
  }

  &.dribbble {
    cursor: url(images/cursor/cursor-dribbble.png), auto;
  }

  &.github {
    cursor: url(images/cursor/cursor-github.png), auto;
  }
`;

const ContactLink = styled.a`
  margin: 10px;
  text-decoration: none;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }

  &.email {
    cursor: url(images/cursor/cursor-email.png), auto;
  }

  &.resume {
    cursor: url(images/cursor/cursor-download.png), auto;
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <Contact>
        <ContactLink className="email" href="mailto:helo@sofyanux.my.id">
          helo@sofyanux.my.id
        </ContactLink>
        |
        <ContactLink
          className="resume"
          href="resume/resume.pdf"
          download="Resume - Sofyan Sauri.pdf"
        >
          Download Resume
        </ContactLink>
      </Contact>
      <SocialContainer>
        <SocialIcon
          className="linkedin"
          href="https://www.linkedin.com/in/akang-sofyan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </SocialIcon>

        <SocialIcon
          className="instagram"
          href="https://www.instagram.com/sofyanux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </SocialIcon>

        <SocialIcon
          className="behance"
          href="https://www.behance.net/sofyansauri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance size={24} />
        </SocialIcon>

        <SocialIcon
          className="dribbble"
          href="https://www.dribbble.com/sofyanux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbble size={24} />
        </SocialIcon>

        <SocialIcon
          className="github"
          href="https://www.github.com/sofyanux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </SocialIcon>
      </SocialContainer>
    </ContactContainer>
  );
};

export default ContactPage;
