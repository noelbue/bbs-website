import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from 'gatsby-plugin-react-i18next'
import * as styles from './styles.module.css'

const ProjectCard = ({ title, client, description, technologies, links }) => (
    <div className={styles.projectCard}>
        <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <h4 className={styles.projectClient}>{client}</h4>
            <p className={styles.projectDescription}>{description}</p>
            <div className={styles.technologies}>
                {technologies.map((tech, index) => (
                    <span key={index} className={styles.technology}>{tech}</span>
                ))}
            </div>
            <div className={styles.links}>
                {links.live && (
                    <a href={links.live} target="_blank" rel="noreferrer" className={styles.link}>Visit Website</a>
                )}
                {links.website && (
                    <a href={links.website} target="_blank" rel="noreferrer" className={styles.link}>Visit Website</a>
                )}
                {links.old && (
                    <a href={links.old} target="_blank" rel="noreferrer" className={styles.link}>Visit Old Website</a>
                )}
                {links.new && (
                    <a href={links.new} target="_blank" rel="noreferrer" className={styles.link}>Visit New Website</a>
                )}
            </div>
        </div>
    </div>
)

const Projects = () => {
    const { language } = useI18next()
    const data = useStaticQuery(graphql`
    query {
      projectsJson {
        en {
          title
          projects {
            title
            client
            description
            technologies
            links {
              live
              website
              oldtitle
              newtitle
              old
              new
            }
          }
        }
        de {
          title
          projects {
            title
            client
            description
            technologies
            links {
              live
              website
              oldtitle
              newtitle
              old
              new
            }
          }
        }
      }
    }
  `)

    const projectsData = data.projectsJson[language]

    return (
        <section className={styles.projects} id="projects">
            <h2 className={styles.sectionTitle}>
                <span className={styles.sectionNumber}>03.</span>
                {projectsData.title}
            </h2>
            <div className={styles.projectsGrid}>
                {projectsData.projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects