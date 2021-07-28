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
  bgImg: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText, bgImg }) => (
  <>
    {/* <StaticImage src={bgImg} alt="background image of Atlanta with helicopters" /> */}
    <Styled.Banner>
      <Container section>
        <TitleSection title={title} subtitle={subtitle} hero none center />
        <Styled.Content>{content}</Styled.Content>
        <Link to={linkTo}>
          <Button primary>{linkText}</Button>
        </Link>
      </Container>
    </Styled.Banner>
  </>
);

export default Banner;
