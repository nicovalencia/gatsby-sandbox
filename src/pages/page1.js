import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout.js';

export default ({
  data: {
    site: {
      siteMetadata: {
        page1: {
          title,
          description,
        },
      },
    },
  },
}) => (
  <Layout>
    <h2>{title}</h2>
    <p>{description}</p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        page1 {
          title,
          description,
        }
      }
    }
  }
`;
