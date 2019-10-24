import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

const PageTitle = styled.h2`
  margin: 25px;
`

const PostCard = styled.div`
  width: 100%;
  margin: 25px;
  height: 200px;
  border-radius: 5px;
  background-color: #efefef;
  display: flex;
  box-shadow: 3px 4px 8px 0 grey;
`

const PostText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`
const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`
const PostSubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`
const PostMeta = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  margin: 8px 0;
`
const PostExcerpt = styled.p`
  font-size: 1rem;
  font-weight: 400;
`
const PostThumbnail = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`

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
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <PageTitle>Articles On Godly Play</PageTitle>
      <Link to="/blog">
        <PostCard>
          <PostThumbnail
            src={data.allMarkdownRemark.edges[0].node.frontmatter.thumbnail}
            alt="Some data"
          />
          <PostText>
            <PostTitle>
              {data.allMarkdownRemark.edges[0].node.frontmatter.title}
            </PostTitle>
            <PostSubTitle>
              {data.allMarkdownRemark.edges[0].node.frontmatter.subtitle}
            </PostSubTitle>
            <PostMeta>
              By {data.allMarkdownRemark.edges[0].node.frontmatter.author} •{" "}
              {data.allMarkdownRemark.edges[0].node.frontmatter.date} •{" "}
              {data.allMarkdownRemark.edges[0].node.timeToRead} min read
            </PostMeta>
            <PostExcerpt>
              {data.allMarkdownRemark.edges[0].node.excerpt}
            </PostExcerpt>
          </PostText>
        </PostCard>
      </Link>
    </Layout>
  )
}

export default Blog
