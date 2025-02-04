import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'
import HeroAnimation from '../HeroAnimation'

const Hero = () => {
  const { language } = useI18next()
  const data = useStaticQuery(graphql`
    query {
      heroJson {
        en {
          welcome
          title
          subtitle
          description
          cta
          ctaLink
        }
        de {
          welcome
          title
          subtitle
          description
          cta
          ctaLink
        }
      }
    }
  `)

  const heroData = data.heroJson[language]

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.welcome}>{heroData.welcome}</p>
        <h1 className={styles.title}>{heroData.title}</h1>
        <h2 className={styles.subtitle}>{heroData.subtitle}</h2>
        <p className={styles.description}>{heroData.description}</p>
        <a href={heroData.ctaLink} className={styles.cta}>
          {heroData.cta}
        </a>
      </div>
      {/* <HeroAnimation /> – coming soon*/}
    </section>
  )
}

export default Hero