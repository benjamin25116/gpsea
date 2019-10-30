import React from "react"
import Layout from "../components/layout"
import Subscribe from "../components/subscribe"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "../components/image"

const Container = styled.div`
  margin: 2.5rem auto;
  max-width: calc(768px - 3rem);
`
const PostTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 1.5rem 0.2rem;
`
const PostSubTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.5rem;
  color: #858585;
  margin: 0 1.5rem 0.2rem;
`
const PostMeta = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  font-style: italic;
  margin: 0.5rem 1.5rem;
`
const imageStyle = {
  width: "100vw",
  maxWidth: "1024px",
  maxHeight: "400px",
  objectFit: "cover",
}

const Post = styled.article`
  :first-letter {
    font-weight: 700;
    font-size: 3rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }

  blockquote {
    border-left: 10px solid var(--light);
    font-style: italic;
  }
`

const BlogpostTemplate = ({ data }) => {
  let string = data.markdownRemark.frontmatter.thumbnail
  let imageName = string.slice(8)

  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostSubTitle>{post.frontmatter.subtitle}</PostSubTitle>
        <PostMeta>
          By {post.frontmatter.author} • {post.frontmatter.date} •{" "}
          {post.timeToRead} {post.timeToRead < 2 ? "min read" : "mins read"}
        </PostMeta>
      </Container>
      <Image originalName={imageName} alt={imageName} style={imageStyle} />
      <Container>
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />

        <Link to="/blog" style={{ margin: "0 1.5rem 1rem" }}>
          {"< "}Back to Blog{" "}
        </Link>
      </Container>
      <Subscribe />
    </Layout>
  )
}

export const data = graphql`
  query MyQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        subtitle
        title
        date(formatString: "DD MMM")
        thumbnail
      }
      html
      timeToRead
    }
  }
`

export default BlogpostTemplate
