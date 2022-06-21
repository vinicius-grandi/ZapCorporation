import React from 'react';
import styled from 'styled-components';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { i18n } from "./translate/i18";

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

function App() {
  return (
    <>
        <Header />
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
        <Footer />
    </>
  );
}

export default App;
