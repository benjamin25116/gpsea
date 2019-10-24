/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      type="text/javascript"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />,
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-150488677-1"
    />,
  ])
}
