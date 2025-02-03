import React from "react"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'

export const LanguageSwitcher = () => {
  const { languages, language, changeLanguage } = useI18next()

  return (
    <div className={styles.languageSwitcher}>
      {languages.map((lng, index) => (
        <React.Fragment key={lng}>
          <button
            className={`${styles.langButton} ${lng === language ? styles.active : ''}`}
            onClick={() => changeLanguage(lng)}
            aria-label={`Change language to ${lng}`}
          >
            {lng.toUpperCase()}
          </button>
          {index < languages.length - 1 && (
            <span className={styles.divider}>|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default LanguageSwitcher