const config = require("./src/config/index")

module.exports = {
  siteMetadata: {
    title: config.site.title,
    description: config.site.description,
    url: config.site.url,
  },
  plugins: [],
}
