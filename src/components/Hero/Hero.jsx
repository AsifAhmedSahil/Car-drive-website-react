import React from 'react'
import styles from './Hero.modules.css'

const Hero = () => {
  return (
    <div className={styles.aero}>
         <form >
            <div className={styles.text}>
                <label>Where</label>
                <input type="text" placeholder='Search Location' />
            </div>
            <div className={styles.from}>
                <span className={styles.border}></span>
                <label></label>
                <input type="date" />

            </div>
            <div className={styles.until}>
            <span className={styles.border}></span>
                <label></label>
                <input type="date" />

            </div>
            <div className={styles.search}>

            </div>
         </form>
        
    </div>
  )
}

export default Hero