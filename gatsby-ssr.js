/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
export function onRenderBody({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents([
    <script
      type="text/javascript"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />,
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-150488677-1"
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-150488677-1');
   	 `,
      }}
    />,
  ])
  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: ` if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }`,
      }}
    />,
  ])
}
