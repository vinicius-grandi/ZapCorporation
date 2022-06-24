import React from 'react';
import { Section } from './PrivacyPolicy';
import { StyledMain } from '../components/Main';
import { useTranslation } from 'react-i18next';

function About() {
  document.title = 'About'
  const { t } = useTranslation();
  return (
    <StyledMain>
      <Section>
        <h1>{t('about.title')}</h1>
        {t<string, string[]>('about.paragraphs', { returnObjects: true }).map((p, i) => <p key={i}>{p}</p>)}
      </Section>
    </StyledMain>
  );
}

export default About;
