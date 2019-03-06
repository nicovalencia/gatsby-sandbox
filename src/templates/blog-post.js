import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export default ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        title
      },
    },
  },
}) => (
  <Layout>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{
      __html: html,
    }} />
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`;
