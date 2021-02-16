import Service from './service'
import React from 'react';
import cn from 'classnames';
import styles from './services.module.css'


export default function Services() {

    return (

        <div id="carouselExampleIndicators" className={cn("carousel slide", styles.carousel)} data-bs-ride="carousel"  data-bs-interval='false'>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className={cn("row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3", styles.container)}>
                        <Service type="pintura" title="Enderezado y pintura" url="/images/services/pintura.webp"></Service>
                        <Service type="ac" title="Aire acondicionado" url="images/services/ac.webp"></Service>
                        <Service type="lubricentro" title="Lubricentro" url="images/services/lubricentro.webp"></Service>
                        <Service type="llantas" title="Llantera" url="images/services/llanta.webp"></Service>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className={cn("row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3", styles.container)}>
                        <Service type="general" title="Mecánico general" url="images/services/mantenimiento.webp"></Service>
                        <Service type="carWash" title="Auto lavado" url="images/services/lavado.webp"></Service>
                        <Service type="muflas" title="Muflas" url="images/services/muflas.webp"></Service>
                        <Service type="repuestos" title="Repuestos" url="images/services/car-parts.webp"></Service>
                    </div>
                </div>
            </div>
            <div className={styles.controls}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}