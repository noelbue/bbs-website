import React from "react"
import Layout from "../components/Layout/index"
import { Seo } from "../components/Seo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Process from "../components/Process"
import Projects from "../components/Projects"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import * as styles from "./index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Partners />
        <Contact />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage