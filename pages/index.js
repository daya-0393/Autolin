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

    <div className={styles.outerContainer}>
      <div className={styles.whatsapp}>
        <a href="#"><img src="images/icons/whatsapp.png"></img></a>
      </div>
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
            <Benefits></Benefits>
          </div>
          <div className={cn("row", styles.section, styles.services)} id="services" ref={services}>
            <h1 className={styles.heading}>Servicios</h1>
            <Services rootClass={services}></Services>
          </div>
          <div className={cn("row", styles.section, styles.work)} id="work">
            <h1 className={styles.heading}>Nuestro trabajo</h1>
            <Gallery></Gallery>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
    </div>
      
  )
}
