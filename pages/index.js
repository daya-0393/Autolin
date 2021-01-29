import Head from 'next/head'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Gallery from '../Components/Gallery/gallery'
import Services from '../Components/Services/services'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import Benefits from '../Components/Benefits/benefits'
import styles from '../styles/index.module.css'
import cn from 'classnames'


export default function Index() {
  


  return (

      <div className="body">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous"></link>
          <script src="https://kit.fontawesome.com/da33aea8dd.js" crossorigin="anonymous"></script>
        </Head>

        <div className={styles.whatsapp}>
          <a href="#"><img src="images/icons/whatsapp.png"></img></a>
        </div>

        <Header></Header>
        
        <div className={styles["bd-img"]}>
          <div className={styles["cover-info"]}>
            <div className={cn("row", styles["cover-heading"])}>
              <h1>Esto es una</h1>
              <h1>prueba</h1>
            </div>
            <Button>Ver servicios</Button>
          </div>
        </div>
        
        <main className="container">
          <div className={styles.section} id="benefits">
            <Benefits></Benefits>
          </div>

          <div className={cn("row", styles.section)} id="services">
              <h1 className={styles.heading}>Servicios</h1>
              <Services></Services>
          </div>

          <div className={cn("row", styles.section)} id="work"> 
            <h1 className={styles.heading}>Nuestro trabajo</h1>
            <Gallery></Gallery>
          </div>
        </main>

        <Footer></Footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </div>
  )
}
