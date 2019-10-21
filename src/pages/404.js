import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Image originalName="404.png" />
    <div style={{ width: "100vw", maxWidth: "1024px", padding: "25px" }}>
      <h1>"Are you Lost?"</h1>
      <p>It seems that the page you are looking for does not exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage
