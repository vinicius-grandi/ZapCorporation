import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p,
  li {
    width: fit-content;
    display: inline;
  }
`;

function Footer() {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <p>{`© 2022-${new Date().getFullYear()}`}</p>
      <ul
        onClick={() =>
          setTimeout(() => window.scroll({ top: 0, behavior: 'smooth' }), 200)
        }
      >
        <li>
          | <Link to="/privacy-policy">{t('footer.first')}</Link> |{' '}
        </li>
        <li>
          <Link to="/about">{t('footer.second')}</Link>
        </li>
      </ul>
      <p>
        {t('footer.part1') + ' '}
        <a
          href="https://github.com/vinicius-grandi"
          target="_blank"
          rel="noreferrer"
        >
          {'Vinicius Grandi '}
        </a>
        {t('footer.part2') + ' '}
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
