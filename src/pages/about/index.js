import React from "react"
import Layout from "../../components/layout"
import About from '../../components/about'
import './style.scss'

export default function AboutPage() {
  return (
    <Layout>
      <div className="aboutContainer">
        <h2>This is about page</h2>
        <About />
      </div>
    </Layout>
  )
}
