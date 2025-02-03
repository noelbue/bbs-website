import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'
import ThemeToggle from '../ThemeToggle'
import LanguageSwitcher from '../LanguageSwitcher'
import { ThemeContext } from '../../context/ThemeContext'

const Navigation = () => {
  const { language } = useI18next()
  const { isDarkMode } = React.useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      navigationJson {
        en {
          logo {
            dark
            light
            alt
            href
          }
          menu {
            title
            href
          }
        }
        de {
          logo {
            dark
            light
            alt
            href
          }
          menu {
            title
            href
          }
        }
      }
    }
  `)

  const navData = data.navigationJson[language]
  const logoSrc = isDarkMode ? navData.logo.dark : navData.logo.light

  return (
    <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <a href={navData.logo.href} className={styles.logo}>
        <img src={logoSrc} alt={navData.logo.alt} />
      </a>

      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={styles.menuIcon}></span>
      </button>
      <div className={styles.menu}>
        {navData.menu.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.menuItem}
          >
            <span className={styles.menuNumber}>
              {String(index + 1).padStart(2, '0')}.
            </span>
            {item.title}
          </a>
        ))}
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navigation