import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout.js';
import HelloWorld from '../components/HelloWorld';

export default ({
  data: {
    allMarkdownRemark: {
      totalCount,
      edges
    },
  },
}) => (
  <Layout>
    <HelloWorld />
    <h2>This is my hello world site!</h2>
    <p>Total markdown pages: {totalCount}</p>
    {edges.map(({ node }) => (
      <div key={node.id}>
        <h3>{node.frontmatter.title}</h3>
        <p>
          <i>{node.frontmatter.date}</i> - {node.excerpt}
        </p>
        <Link to={node.fields.slug}>Read Post</Link>
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
