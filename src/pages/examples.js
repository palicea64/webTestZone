import React from "react"
import Header from "./examples/header"
import HeaderStatic from "./examples/headerStatic"
import Layout from "./components/layout"
import { graphql } from "gatsby"

export const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <p>hello from examples page</p>
      <Header />
      <HeaderStatic />
      <h5>Author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
export default examples
