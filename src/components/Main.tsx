import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'

export const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:
    radial-gradient(circle at top left, #036866, #00E878, #a3e0c3) top left,
    radial-gradient(circle at top right, #236666, #00E878, #a3e0c3) top right,
    radial-gradient(circle at bottom right, #036866, #00E878, #a3e0c3) bottom right,
    radial-gradient(circle at bottom left, #036866, #00E878, #a3e0c3) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  h2 {
    margin: 0;
    color: #FFC745;
    text-shadow: 1px 1px 2px #00000087;
  }
  padding: 1.5rem;
  p {
    text-shadow: 1px 1px 2px #e6e6e688;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`

const BotArticle = styled.article`
  display: grid;
  padding: 0.2rem;
  font-size: 1.2rem;
  grid-template-columns: 1fr 1fr;
  text-shadow: 1px 1px 2px #e6e6e688;
`

const BotIcon = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  text-align: center;
  #wip {
    background-color: #000000cf;
    animation: appear 0.5s;
    border-radius: 3px;
    width: fit-content;
    margin: auto;
    padding: 0.2rem;
    font-size: 1.1rem;

    @keyframes appear {
      from {
        opacity: 0%;
        transform: scale(0.5);
      }
      to {
        opacity: 100%;
        transform: scale(1)
      }
    }
  }
  span {
    font-size: 2rem;
    position: absolute;
    left: 0;
    right: 0;
    height: fit-content;
    color: #FFB200;
  }
  img {
    &:hover {
      transform: scale(1.1)
    }
    transition: 0.2s;
    cursor: pointer;
  }
`;

const Section = styled.section`
`

function Main() {
  const { t } = useTranslation();
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <StyledMain>
    <Section>
        <h1>{t<string>('home.titles.section')}</h1>
        <h2>PeladaBot</h2>
        <BotArticle>
          <p>{t<string>('home.messages.bot')}</p>
          <BotIcon onClick={() => setShowOverlay(!showOverlay)}>
            <img src="/ZapCorporation/whatsapp-icon.png" alt="whatsapp icon" />
            <span>ACCESS BOT</span>
            {showOverlay && <span id="wip">{t('home.messages.wip')}</span>}
          </BotIcon>
        </BotArticle>
    </Section>
    </StyledMain>
  );
}

export default Main;
