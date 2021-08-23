module.exports = {
  siteMetadata: {
    title: 'Moatomt',
    author: 'Matthew Kelly-Ng',
    description: 'A Personal Gatsby.js V3 site based on Forty by HTML5 UP',
  },
  pathPrefix: '/personal-gatsby-site',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/MarkDownViewer.js'),
        },
      },
    },
  ],
}
