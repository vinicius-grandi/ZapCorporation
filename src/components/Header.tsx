import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  font-family: 'Varela Round', sans-serif;
  display: flex;
  padding: 0.3rem 1.5rem;
  justify-content: space-between;
  background-color: #007A78;
  color: #FFC745;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ChangeLanguage = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: fit-content;
  img {
    border: 1px solid black;
    border-radius: 20%;
  }
`;

function Header() {
  const { i18n } = useTranslation();
  const getAnotherLang = () => i18n.language === 'pt' ? 'en' : 'pt'

  const [anotherLang, setAnotherLang] = useState(getAnotherLang())
  return (
    <StyledHeader>
            <Link to="/">
              <h1>ZAP CORPORATION</h1>
            </Link>
            <ChangeLanguage type="button" onClick={
              () => {
              i18n.changeLanguage(anotherLang)
              setAnotherLang(getAnotherLang())
            }}
            >
              <img src="/change-language-icon.png" alt="change language icon" />
            </ChangeLanguage>
    </StyledHeader>
  )
}

export default Header;
