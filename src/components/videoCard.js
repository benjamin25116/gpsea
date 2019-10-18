import React from "react"
import styled from "styled-components"

const VideoTitle = styled.h3`
  color: var(--bright);
  font-size: 1.4rem;
  text-align: center;
  margin: 0 0 8px 0;
`
const Video = styled.iframe`
  width: 100vw;
  max-width: 1024px;
  height: calc(100vw / 16 * 9);
  max-height: calc(1024px / 16 * 9);
  border: none;
  box-shadow: 0 1px 4px var(--black);
  margin-bottom: 20px;
`
const VideoCard = props => (
  <>
    <VideoTitle>{props.title}</VideoTitle>
    <Video
      src={props.src}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></Video>
  </>
)

export default VideoCard
