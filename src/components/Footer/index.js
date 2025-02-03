// src/components/Footer/index.js
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'
import { ThemeContext } from '../../context/ThemeContext'

const Footer = () => {
  const { language } = useI18next()
  const { isDarkMode } = React.useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query {
      footerJson {
        en {
          logo {
            dark
            light
            alt
            description
          }
          company {
            name
            registration
          }
          links {
            title
            href
          }
        }
        de {
          logo {
            dark
            light
            alt
            description
          }
          company {
            name
            registration
          }
          links {
            title
            href
          }
        }
      }
    }
  `)

  const footerData = data.footerJson[language]
  const logoSrc = isDarkMode ? footerData.logo.dark : footerData.logo.light

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <div className={styles.logoSection}>
            <img
              src={logoSrc}
              alt={footerData.logo.alt}
              className={styles.logo}
            />
            <div className={styles.companyInfo}>
              <p className={styles.companyName}>
                {footerData.company.name} ({footerData.company.registration})
              </p>
              <p className={styles.companyDescription}>
                {footerData.logo.description}
              </p>
            </div>
          </div>
          <div className={styles.links}>
            {footerData.links.map((link, index) => (
              <a key={index} href={link.href} className={styles.link}>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer