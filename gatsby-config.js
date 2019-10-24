module.exports = {
  siteMetadata: {
    title: `Godly Play South East Asia`,
    description: `The hub for all things Godly Play in the South East Asia. Learn how you can bring God's Word to children through the Montessori philosophy`,
    author: `New Covenant Community Sentul`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogposts`,
        path: `${__dirname}/src/blogposts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Godly Play SEA`,
        short_name: `GPSEA`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff7000`,
        display: `minimal-ui`,
        icon: `src/images/gpsea-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
