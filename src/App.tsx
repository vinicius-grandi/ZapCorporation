import React, { useState } from 'react';
import styled from 'styled-components'
import { i18n } from './translate/i18'

const Header = styled.header`
  display: flex;
  padding: 0.3rem 1.5rem;
  justify-content: space-between;
  background-color: #007A78;
  color: #FFC745;
`

const ChangeLanguage = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: fit-content;
  img {
    border: 1px solid black;
    border-radius: 20%;
  }
`

const Main = styled.main`
  background:
    radial-gradient(circle at top left, #036866, #00E878, #a3e0c3) top left,
    radial-gradient(circle at top right, #d1e9e9, #00E878, #a3e0c3) top right,
    radial-gradient(circle at bottom right, #d1e9e9, #00E878, #a3e0c3) bottom right,
    radial-gradient(circle at bottom left, #036866, #00E878, #a3e0c3) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  h2 {
    margin: 0;
    color: #FFC745;
  }
  padding: 1.5rem;
`

const BotArticle = styled.article`
  display: flex;
  padding: 0.2rem;
  font-size: 1.2rem;
`

const BotIcon = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  text-align: center;
  cursor: pointer;
  span {
    font-size: 2rem;
    position: absolute;
    left: 0;
    right: 0;
    height: fit-content;
    color: #FFB200;
  }
`

const Footer = styled.footer`
  display: flex;
  background-color: #007A78;
  font-size: 1.5rem;
  position: absolute;
  bottom: 0;
  p {
    margin: 0;
    color: #FFC745;
    overflow-x: hidden;
    padding: 0.4rem;
  }
  margin-top: auto;
  width: 100%;
`

function App() {
  const getAnotherLang = () => i18n.language === 'pt' ? 'en' : 'pt'

  const [anotherLang, setAnotherLang] = useState(getAnotherLang())
  return (
    <>
        <Header>
            <h1>ZAP CORPORATION</h1>
            <ChangeLanguage type="button" onClick={
              () => {
              i18n.changeLanguage(anotherLang)
              setAnotherLang(getAnotherLang())
            }}
            >
              <img src="/change-language-icon.png" alt="change language icon" />
            </ChangeLanguage>
        </Header>
        <Main>
            <section>
                <h1>{i18n.t<string>('titles.section')}</h1>
                <h2>PeladaBot</h2>
                <BotArticle>
                  <p>{i18n.t<string>('messages.bot')}</p>
                  <BotIcon>
                    <img src="/whatsapp-icon.png" alt="whatsapp icon" />
                    <span>ACCESS BOT</span>
                  </BotIcon>
                </BotArticle>
            </section>
        </Main>
        <Footer>
          <p>Desenvolvido por <a href="https://github.com/vinicius-grandi" target="_blank" rel="noreferrer">Vinicius Grandi</a> e design por <a href="https://github.com/Luan-0liveira" target="_blank" rel="noreferrer">Luan Oliveira</a></p>
        </Footer>
    </>
  );
}

export default App;
