import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const BlogpostTemplate = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark {
        html
        frontmatter {
          author
          date(formatString: "DD MMM")
          subtitle
          thumbnail
          title
        }
        timeToRead
      }
    }
  `)

  return (
    <Layout>
      <SEO title="A blog post" />
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export default BlogpostTemplate
