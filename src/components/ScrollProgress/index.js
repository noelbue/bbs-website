import React, { useState, useEffect } from 'react'
import * as styles from './styles.module.css'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = (currentScroll / totalScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progress}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress