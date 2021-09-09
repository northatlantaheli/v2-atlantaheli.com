import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { StaticImage } from 'gatsby-plugin-image';
import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
  bgImg?: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText, bgImg }) => (
  <Styled.Banner>
    <Container section>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>{content}</Styled.Content>
      <Styled.Container>
        <Link to={linkTo}>
          <Button primary>{linkText}</Button>
        </Link>
        <a href="https://gift-ui.xola.com/#?button=61362e013cc38531ee6fea02&_=1630941414195&openExternal=true">
          <Button primary>Gift Certificates!</Button>
        </a>
      </Styled.Container>
    </Container>
  </Styled.Banner>
);

export default Banner;
