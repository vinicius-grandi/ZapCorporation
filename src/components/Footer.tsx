import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
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
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Desenvolvido por <a href="https://github.com/vinicius-grandi" target="_blank" rel="noreferrer">Vinicius Grandi</a> e design por <a href="https://github.com/Luan-0liveira" target="_blank" rel="noreferrer">Luan Oliveira</a></p>
    </StyledFooter>
  );
}

export default Footer;
