import React from "react"
import '../../fonts.css'
import '../../global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import * as styles from './styles.module.css'
import { ThemeProvider } from '../../context/ThemeContext'
import Navigation from '../Navigation'
import Footer from '../Footer'
import ScrollProgress from '../ScrollProgress'

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className={styles.layout}>
        <ScrollProgress />
        <Navigation />
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout