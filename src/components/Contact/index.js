import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'

const Contact = () => {
    const { language } = useI18next()
    const data = useStaticQuery(graphql`
    query {
      contactJson {
        en {
          title
          heading
          description
          cta
        }
        de {
          title
          heading
          description
          cta
        }
      }
    }
  `)

    const contactData = data.contactJson[language]

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>05.</span>
                    {contactData.title}
                </h2>
            </div>
            <div className={styles.content}>
                <h3 className={styles.mainTitle}>{contactData.heading}</h3>
                <p className={styles.description}>
                    {contactData.description}
                </p>
                <a
                    href="mailto:nb@b-business-solutions.ch"
                    className={styles.ctaButton}
                >
                    {contactData.cta}
                </a>
            </div>
        </section>
    )
}

export default Contact