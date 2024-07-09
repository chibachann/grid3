import * as React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ pageTitle,children }) => {


  return (
    <div>
      <Header/>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
