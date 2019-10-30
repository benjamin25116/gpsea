import React from "react"
import styled from "styled-components"

const Container = styled.article`
  margin: 1.5rem;
  border-radius: 5px;
  background-color: hsl(27, 35%, 98%);
  display: flex;
  flex-flow: column wrap;
  box-shadow: 1px 2px 2px 0 grey;

  @media (min-width: 736px) {
    flex-flow: row;
  }
`
const Thumbnail = styled.img`
  object-fit: cover;
  border-radius: 5px;
  @media (min-width: 736px) {
    max-width: 200px;
  }
  @media (max-width: 735px) {
    max-height: 150px;
    width: 100%;
  }
`
const TextWrapper = styled.section``

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 1.5rem 0.2rem;
`
const Subtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.5rem;
  color: #858585;
  margin: 0 1.5rem 0.2rem;
`
const Metadata = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`
const Excerpt = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;

  @media (max-width: 735px) {
    display: none;
  }
`

const BlogCard = ({
  thumbnail,
  title,
  subtitle,
  author,
  date,
  timeToRead,
  excerpt,
}) => {
  return (
    <Container>
      <Thumbnail src={thumbnail} />
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Metadata>
          By {author} • {date} • {timeToRead} {timeToRead > 1 ? "mins" : "min"}
        </Metadata>
        <Excerpt>{excerpt}</Excerpt>
      </TextWrapper>
    </Container>
  )
}

export default BlogCard
