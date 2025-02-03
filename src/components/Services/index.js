import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'

const ServiceCard = ({ title, description, tags }) => (
    <div className={styles.serviceCard}>
        <div className={styles.circle}></div>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
        <div className={styles.tags}>
            {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>#{tag}</span>
            ))}
        </div>
    </div>
)

const Services = () => {
    const { language } = useI18next()
    const data = useStaticQuery(graphql`
    query {
      servicesJson {
        en {
          title
          services {
            title
            description
            tags
          }
        }
        de {
          title
          services {
            title
            description
            tags
          }
        }
      }
    }
  `)

    const servicesData = data.servicesJson[language]

    return (
        <section className={styles.services} id="services">
            <h2 className={styles.sectionTitle}>
                <span className={styles.sectionNumber}>01.</span>
                {servicesData.title}
            </h2>
            <div className={styles.servicesGrid}>
                {servicesData.services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    )
}

export default Services