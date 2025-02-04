import React from "react"
import Lottie from "lottie-react"
import * as styles from './styles.module.css'
import animationData from '../../../data/heroAnimation.json'

const HeroAnimation = () => {
    return (
        <div className={styles.animationContainer}>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className={styles.animation}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice"
                }}
            />
        </div>
    )
}

export default HeroAnimation