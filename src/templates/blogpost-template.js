import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  margin: 25px;
`
const Post = styled.article`

`
const Hero = styled.img`
  width: 100vw;
  max-width: 1024px;
  max-height: 500px;
  object-fit: cover;
`
const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`
const PostSubTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`
const PostMeta = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  font-style: italic;
  margin: 8px 0;
`

const BlogpostTemplate = ({ data }) => {
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
      <Hero src={post.frontmatter.thumbnail} alt="post thumbnail" />
      <Container>
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />
        <br />
        <Link to="/blog">{"< "}Back to Blog </Link>
      </Container>
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
