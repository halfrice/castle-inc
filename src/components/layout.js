import React from "react"
import "normalize.css/normalize.css"
import { Globals } from "~styles"

const Layout = ({ children }) => (
  <div id="layout">
    <Globals />
    {children}
  </div>
)

export default Layout
