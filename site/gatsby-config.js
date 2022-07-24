module.exports = {
  siteMetadata: {
    title: "Service Mesh Patterns",
    description:
      "Expect more from your infrastructure. Cloud native, open source software for your cloud native infrastructure and applications. Allowing developers to focus on business logic, not infrastructure concerns. Empowering operators to confidentally run modern infrastructure.",
    siteUrl: "http://service-mesh-patterns.github.io/",
    author: "Service Mesh Pattern Authors",
    permalink: "http://service-mesh-patterns.github.io/",
    image: "/images/service-mesh-pattern.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
        }
      }
    }, {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false, // suppress warning about childImageSharp being null
      },
    }, {
      resolve: "gatsby-plugin-styled-components",
      options: {
        minify: false,
      },
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "pages",
        "path": "./src/pages/"
      }
    }
  ]
};