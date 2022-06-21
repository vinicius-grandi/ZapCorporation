import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #007a78;
  font-size: 1rem;
  p {
    margin: 0;
    color: #ffc745;
    overflow-x: hidden;
    padding: 0.3rem;
  }
  margin-top: auto;
  width: 100%;
  a {
    color: #cacaca;
    text-decoration: none;
    &:hover {
      color: #f1cd78;
    }
  }
`;

function Footer() {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <p>{`© 2022-${new Date().getFullYear()}`}</p>
      <p>
        | <Link to="/tos">Terms of Service</Link> |{" "}
        <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
        <Link to="/about">About</Link>{" "}
      </p>
      <p>
        {t("footer.part1") + " "}
        <a
          href="https://github.com/vinicius-grandi"
          target="_blank"
          rel="noreferrer"
        >
          {"Vinicius Grandi "}
        </a>
        {t("footer.part2") + " "}
        <a
          href="https://github.com/Luan-0liveira"
          target="_blank"
          rel="noreferrer"
        >
          Luan Oliveira
        </a>
      </p>
    </StyledFooter>
  );
}

export default Footer;
