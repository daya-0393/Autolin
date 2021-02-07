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
      <div className={styles.whatsapp}>
        <a href="#"><img src="images/icons/whatsapp.png"></img></a>
      </div>
      <Header></Header>
      <div className={cn("container", styles.container)}>
        <div className={styles["bd-img"]}>
          <div className={styles["cover-info"]}>
            <h1>Todo lo que necesites<br />para tu vehículo</h1>
            <a className={cn("btn btn-primary", styles.btn)} href="#services">Ver servicios</a>
          </div>
        </div>
        <div className={cn("row", styles.section)} id="benefits">
          <Benefits></Benefits>
        </div>
        <div className={cn("row", styles.section)} id="services">
          <h1 className={styles.heading}>Servicios</h1>
          <hr className={styles.hr}></hr>
          <Services></Services>
        </div>
        <div className={cn("row", styles.section, styles.work)} id="work">
          <h1 className={styles.heading}>Nuestro trabajo</h1>
          <hr className={styles.hr}></hr>
          <Gallery></Gallery>
        </div>
      </div>
      <Footer></Footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
    </div>       
  )
}
