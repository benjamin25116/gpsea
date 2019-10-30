import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ alt, className, originalName, style }) => {
  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            fluid {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const image = data.allImageSharp.edges.find(({ node }) => {
    return node.fluid.originalName.includes(originalName)
  })
  if (!image) {
    return null
  }

  return (
    <Img
      className={className}
      alt={alt}
      fluid={image.node.fluid}
      style={style}
    />
  )
}

export default Image
