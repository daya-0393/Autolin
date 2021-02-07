import Service from './service'
import {useRef, useState} from 'react'
import React from 'react';
import cn from 'classnames';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import {content} from './content'
import styles from './services.module.css'
import Link from 'next/link'

export default function Services(){
    const [url, setUrl] = useState("e");
    const [heading, setHeading] = useState("e");
    const [text, setText] = useState("e");
    const [type, setType] = useState("");
    const [checked, setChecked] = React.useState(false);
    const serviceCont = useRef();
    const services = useRef();

    const setServiceContent = (type, callback) => {
        setUrl(content[type].url);
        setHeading(content[type].heading);
        setText(content[type].paragraph);
        callback();
    }

    const showContent = () =>{
        setChecked((prev) => !prev);
        serviceCont.current.scrollIntoView({
            behavior: "smooth", 
            block: "start"
        })
    }
    const hideContent = () =>{
        setChecked((prev) => !prev);
        services.current.scrollIntoView({
            behavior: "smooth", 
            
        })
    }

    const defineContentType = (e) =>{
        const type = e.target.name;
        setType(type);
        setServiceContent(type, showContent)
    }

    return(
        <div className={cn("container-fluid", styles.outerContainer)} ref={services}>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.1/react-with-addons.js"></script>
            <div className={cn("row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3", styles.container)}>
                <Service type="pintura" title="Enderezado y pintura" url="/images/services/pintura.jpg" click={defineContentType}></Service>
                <Service type="ac" title="Aire acondicionado" url="images/services/ac.jpg" click={defineContentType}></Service>
                <Service type="lubricentro" title="Lubricentro" url="images/services/lubricentro.jpg" click={defineContentType}></Service> 
                <Service type="llantas" title="Llantera" url="images/services/llanta.jpg" click={defineContentType}></Service>
                <Service type="general" title="Mecánico general" url="images/services/mantenimiento.jpg" click={defineContentType}></Service>
                <Service type="carWash" title="Auto lavado" url="images/services/lavado.jpg" click={defineContentType}></Service>
                <Service type="muflas" title="Muflas" url="images/services/muflas.jpg" click={defineContentType}></Service>
                <Service type="repuestos" title="Repuestos" url="images/services/car-parts.jpeg" click={defineContentType}></Service>
            </div>
            <div className={styles.root} ref={serviceCont}>
                <Collapse in={checked}>
                    <Paper elevation={4} className={styles.paper}>
                        <div className={styles["color-overlay2"]}></div>
                        <div className={styles["outer-cont-info"]}>
                            <div className={styles["cont-info"]}>
                                <h1>{heading}</h1>
                                <p>{text}</p>
                                <Link href="/cotizacion">
                                    <a className={cn("btn btn-success", styles.btn)}>Cotizar servicio</a>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.closeBtnCont}>
                            <button className={styles.closeBtn} onClick={hideContent}><i aria-hidden className={cn("fas fa-chevron-up", styles.fas)}></i></button>
                        </div>
                    </Paper>
                </Collapse>
            </div>
            
        </div>
    )
}