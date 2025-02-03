import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'

const Partners = () => {
    const { language } = useI18next()
    const data = useStaticQuery(graphql`
    query {
      partnersJson {
        en {
          title
          partners {
            name
            company
            description
            link
          }
        }
        de {
          title
          partners {
            name
            company
            description
            link
          }
        }
      }
    }
  `)

    const partnersData = data.partnersJson[language]

    return (
        <section className={styles.partners} id="partners">
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>04.</span>
                    {partnersData.title}
                </h2>
            </div>
            <div className={styles.partnersGrid}>
                {partnersData.partners.map((partner, index) => (
                    <div key={index} className={styles.partnerCard}>
                        <h3 className={styles.partnerName}>{partner.name}</h3>
                        <a href={partner.link} className={styles.partnerCompany}>
                            @{partner.company}
                        </a>
                        <p className={styles.partnerDescription}>
                            {partner.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Partners