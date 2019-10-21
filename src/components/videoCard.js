import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100vw / 2) - 30px);
  }
`

const VideoTitle = styled.h3`
  color: var(--bright);
  font-size: 1.4rem;
  text-align: center;
  margin: 0 0 8px 0;
`
const Video = styled.iframe`
  width: inherit;
  height: calc(100vw / 16 * 9);
  border: none;
  box-shadow: 0 1px 4px var(--black);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: calc((100vw / 2) - 30px);
    height: calc(((100vw / 2) - 30px) / 16 * 9);
  }
`
const VideoCard = props => (
  <Container>
    <VideoTitle>{props.title}</VideoTitle>
    <Video
      src={props.src}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></Video>
  </Container>
)

export default VideoCard
