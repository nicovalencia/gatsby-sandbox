import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Navigation from '../components/Navigation';

const Wrapper = styled.div`
  max-width: 80%;
  margin: 20px auto;
`;

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <h1>{data.site.siteMetadata.title}</h1>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default Layout;
