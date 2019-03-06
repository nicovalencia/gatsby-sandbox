module.exports = {
  siteMetadata: {
    title: `Hello World`,
    page1: {
      title: `Page One`,
      description: `This is page oneeeee!`,
    },
    page2: {
      title: `Page Two`,
      description: `This is page twoooo!`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
