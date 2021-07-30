import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import * as Styled from './styles';


const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`{
  site {
    siteMetadata {
      title
    }
  }
  placeholderImage: file(relativePath: {eq: "logov1.png"}) {
    childImageSharp {
      gatsbyImageData(width: 474, layout: CONSTRAINED)
    }
  }
}
`);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage = placeholderImage.childImageSharp.gatsbyImageData;

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <GatsbyImage image={logoImage} alt={logoTitle} />
      </Styled.Image>
      <Styled.Text>{logoTitle}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
