import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MenuIcon = props => {
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
    return node.fluid.originalName.includes(props.originalName)
  })
  if (!image) {
    return null
  }

  return (
    <Img
      className={props.className}
      alt={props.alt}
      fluid={image.node.fluid}
      style={props.style}
    />
  )
}

export default MenuIcon
