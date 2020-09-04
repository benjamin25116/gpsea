import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import MainTitle from "../components/mainTitle"
import BlogCard from "../components/blogCard"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              date(formatString: "DD MMM")
              subtitle
              thumbnail
              title
              link
            }
            excerpt
            timeToRead
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <MainTitle>Articles On Godly Play</MainTitle>
      {/* {data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.frontmatter.title == "home-banner-2") {
          return (
            <a href={node.frontmatter.link}>
              <img
                src={node.frontmatter.thumbnail}
                alt="some text"
              />
            </a>
            // <pre>{JSON.stringify(node, null, 2)}</pre>
          )
        }
      })} */}
      {data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.fields) {
          return (
            <Link to={`/blog/${node.fields.slug}`} key={node.id}>
              <BlogCard
                thumbnail={node.frontmatter.thumbnail.slice(8)}
                title={node.frontmatter.title}
                subtitle={node.frontmatter.subtitle}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                timeToRead={node.timeToRead}
                excerpt={node.excerpt}
              />
            </Link>
          )
        }
      })}
    </Layout>

    // <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}

export default Blog
