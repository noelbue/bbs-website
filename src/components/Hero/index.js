import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'

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
            <div className={styles.backgroundLines}>
                {/* SVG for the angled lines */}
                <svg viewBox="0 0 400 400" className={styles.lines}>
                    <path d="M0 400 L400 0" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
                    <path d="M50 400 L400 50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
                    <path d="M100 400 L400 100" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
                    <path d="M150 400 L400 150" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
                    <path d="M200 400 L400 200" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
                </svg>
            </div>
        </section>
    )
}

export default Hero