import React from "react"
import Layout from "../../components/layout"
import About from '../../components/about'
import './style.css'

export default function AboutPage() {
  return (
    <Layout>
      <div className="aboutContainer">
        <h1>This is about page</h1>
        <About />
      </div>
    </Layout>
  )
}
