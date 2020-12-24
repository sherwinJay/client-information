/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import { GlobalStyle } from "./styles/main.css"
import "./styles/reset.css"
import "./styles/main.css"

const Layout = ({ children }) => {

  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
