const config = require("./src/config/index")

module.exports = {
  siteMetadata: {
    title: config.site.title,
    description: config.site.description,
    url: config.site.url,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
  ],
}
