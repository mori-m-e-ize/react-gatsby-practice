
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import useWindowDimensions from "./useWindowDimensions"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"
import "src/styles/global.scss"

const Layout = ({ children }) => {
  let notSmartphone = false
  const { width } = useWindowDimensions()
  notSmartphone = width > 501 ? true : false

  // // デバイス幅を取得
  // const useWindowDimensions = () => {
  //   const getWindowDimensions = () => {
  //     const { innerWidth: width, innerHeight: height } = window
  //     return {
  //       width,
  //       height,
  //     }
  //   }

  //   const [windowDimensions, setWindowDimensions] = useState(
  //     getWindowDimensions()
  //   )
  //   useEffect(() => {
  //     const onResize = () => {
  //       setWindowDimensions(getWindowDimensions())
  //     }
  //     window.addEventListener("resize", onResize)
  //     return () => window.removeEventListener("resize", onResize)
  //   }, [])
  //   return windowDimensions
  // }
  // const { width } = useWindowDimensions()
  // //TODO: change 501 to 481
  // notSmartphone = width > 501 ? true : false

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layoutOne">
      <Header
        notSmartphone={notSmartphone}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
