import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>"I wonder..."</h1>
    <p>
      It seems that the page you are looking for does not exist.
    </p>
  </Layout>
)

export default NotFoundPage
