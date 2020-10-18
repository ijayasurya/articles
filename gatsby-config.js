require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Reflex",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-post",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
    {
      resolve: 'gatsby-source-blogger',
      options: {
        apiKey: 'AIzaSyATZwUXVEBWk9mPan_ZACbdF2WM9bgdCUk',
        blogId: '4927059890371501079'
        }
      }
  ],
}
