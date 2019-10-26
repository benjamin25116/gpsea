import React from "react"
import styled from "styled-components"

const Container = styled.div`
  flex-grow: 1;
  margin: 0 1.5rem 1.5rem;
`

const VideoTitle = styled.h3`
  color: var(--bright);
  text-align: center;
`
const Video = styled.iframe`
  width: 100%;
  height: calc(100vw / 2);
  min-height: 150px;
  max-height: 500px;
  border: none;
  box-shadow: 0 1px 4px var(--black);
`
const VideoCard = ({ title, src }) => (
  <Container>
    <VideoTitle>{title}</VideoTitle>
    <Video
      src={src}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></Video>
  </Container>
)

export default VideoCard
