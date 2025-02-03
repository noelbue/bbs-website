import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'

const ProcessStep = ({ number, title, description }) => (
    <div className={styles.processStep}>
        <div className={styles.stepHeader}>
            <span className={styles.stepNumber}>{number}.</span>
            <h3 className={styles.stepTitle}>{title}</h3>
        </div>
        <p className={styles.stepDescription}>{description}</p>
    </div>
)

const Process = () => {
    const { language } = useI18next()
    const data = useStaticQuery(graphql`
    query {
      processJson {
        en {
          title
          steps {
            number
            title
            description
          }
        }
        de {
          title
          steps {
            number
            title
            description
          }
        }
      }
    }
  `)

    const processData = data.processJson[language]

    return (
        <section className={styles.process} id="process">
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>02.</span>
                    {processData.title}
                </h2>
            </div>
            <div className={styles.processGrid}>
                {processData.steps.map((step) => (
                    <ProcessStep
                        key={step.number}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Process