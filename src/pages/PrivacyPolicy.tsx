import React, { createElement, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledMain } from '../components/Main';
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Section = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  h2 {
    color: black;
    text-shadow: none;
  }
`

function PrivacyPolicy() {
  const { t } = useTranslation();
  let strongText = useRef('');

  return (
    <>
      <Header />
      <StyledMain style={{ paddingTop: 0 }}>
        <Section>
          {Object.keys(
            t<string, string[]>('privacyPolicy', { returnObjects: true })
          ).map((header, headerIdx) => (
            <>
              <h1 key={`h1-${headerIdx}`}>{header}</h1>
              {t<string, { p: string }[]>(`privacyPolicy.${header}`, {
                returnObjects: true,
              }).map((elementInfo: {
                [key in string]: string | string[]
              }, id) =>
                Object.keys(elementInfo).map((elementType) => {
                  if (elementType === 'ul' && Array.isArray(elementInfo.ul)) {
                    const isEven = (val: number) => val % 2 === 0;
                    return <ul>
                      {elementInfo.ul.map((listItem, listItemIdx) => {
                        if (isEven(listItemIdx)) {
                          strongText.current = listItem;
                          console.log(strongText.current)
                          return '';
                        }
                        return <li><p><strong>{strongText.current}</strong>{listItem}</p></li>
                      })}
                    </ul>
                  }
                  return createElement(elementType, {
                    key: `${elementType}-${headerIdx}-${id}`
                  }, elementInfo[elementType]);
                })
              )}
            </>
          ))}
        </Section>
      </StyledMain>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;