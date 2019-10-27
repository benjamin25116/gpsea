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
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={`/blog${node.fields.slug}`} key={node.id}>
          <BlogCard
            thumbnail={node.frontmatter.thumbnail}
            title={node.frontmatter.title}
            subtitle={node.frontmatter.subtitle}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
            excerpt={node.excerpt}
          />
        </Link>
      ))}
    </Layout>
  )
}

export default Blog
