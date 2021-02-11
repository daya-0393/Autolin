import Service from './service'
import React from 'react';
import cn from 'classnames';
import styles from './services.module.css'


export default function Services(){

    return(
        <div className={cn("container-fluid", styles.outerContainer)}> 
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.1/react-with-addons.js"></script>
            <div className={cn("row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3", styles.container)}>
                <Service type="pintura" title="Enderezado y pintura" url="/images/services/pintura.webp"></Service>
                <Service type="ac" title="Aire acondicionado" url="images/services/ac.webp"></Service>
                <Service type="lubricentro" title="Lubricentro" url="images/services/lubricentro.webp"></Service>
                <Service type="llantas" title="Llantera" url="images/services/llanta.webp"></Service>
                <Service type="general" title="Mecánico general" url="images/services/mantenimiento.webp"></Service>
                <Service type="carWash" title="Auto lavado" url="images/services/lavado.webp"></Service>
                <Service type="muflas" title="Muflas" url="images/services/muflas.webp"></Service>
                <Service type="repuestos" title="Repuestos" url="images/services/car-parts.webp"></Service>
            </div>
        </div>
    )
}