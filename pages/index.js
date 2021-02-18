import Head from 'next/head'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Gallery from '../Components/Gallery/gallery'
import Services from '../Components/Services/services'
import React, {useRef} from 'react'
import Benefits from '../Components/Benefits/benefits'
import styles from '../styles/index.module.css'
import cn from 'classnames'


export default function Index() {
  const services = useRef();
  return (
    <div className="wrapper">
      <Header></Header>
      <main>
        <div className={styles["bd-img"]}>
          <div className={styles["color-layover"]}></div>
          <div className={styles["cover-info"]}>
            <h1 className={styles.topHeading}>Todo para su vehiculo</h1>
            <h2 className={styles.btmHeading}>EN UN SOLO LUGAR</h2>
            <a className={cn("btn btn-primary", styles.btn)} href="#services">Ver servicios</a>
          </div>
        </div>
        <div className={cn("container", styles.container)}>
          <div className={cn("row", styles.section, styles.benefits)} id="benefits">
            <h1 className={cn("heading", styles.heading)}>Beneficios</h1>
            <Benefits></Benefits>
          </div>
          <div className={cn("row", styles.section, styles.services)} id="services" ref={services}>
            <div className={styles["top-divider"]}></div>
            <h1 className={cn("heading", styles.heading)}>Servicios</h1>
            <Services rootClass={services}></Services>
          </div>
          <div className={cn("row", styles.section, styles.work)} id="work">
            <h1 className={cn("heading", styles.heading)}>Nuestro trabajo</h1>
            <Gallery></Gallery>
          </div>
        </div>
        <div className={styles.whatsapp}>
          <a href="#"><img src="images/icons/whatsapp.png"></img></a>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
