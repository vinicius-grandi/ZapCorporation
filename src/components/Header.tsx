import React, { useState } from 'react';
import styled from 'styled-components';
import { i18n } from '../translate/i18'

const StyledHeader = styled.header`
  display: flex;
  padding: 0.3rem 1.5rem;
  justify-content: space-between;
  background-color: #007A78;
  color: #FFC745;
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
  const getAnotherLang = () => i18n.language === 'pt' ? 'en' : 'pt'

  const [anotherLang, setAnotherLang] = useState(getAnotherLang())
  return (
    <StyledHeader>
            <h1>ZAP CORPORATION</h1>
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
