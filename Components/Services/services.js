
import styles from './services.module.css'
import cn from 'classnames'
import ServiceContent from './serviceContent'
import Service from './service'
import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'
import {useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'


export default function Services(){
    const [modalShow, setModalShow] = useState(false);
    const [url, setUrl] = useState("e");
    const [heading, setHeading] = useState("e");
    const [paragraph, setParagraph] = useState("e");
    const [type, setType] = useState("");
    const [contentShow, setContentShow] = useState(false);
    const content = {
        pintura : {url: "images/services/pintura.jpg", heading: "Pintura", paragraph: "Nulla tristique ullamcorper neque, non mollis purus porta non. Proin sed purus sed sapien lobortis sagittis. Curabitur tellus nibh, posuere ac varius sed, vestibulum sed nunc."},
        llantas: {url: "images/services/llanta.jpg", heading: "Llantera", paragraph: "Nulla tristique ullamcorper neque, non mollis purus porta non. Proin sed purus sed sapien lobortis sagittis. Curabitur tellus nibh, posuere ac varius sed, vestibulum sed nunc."},
        lubricentro: {url: "images/services/lubricentro.jpg", heading: "Lubricentro", paragraph: "Nulla tristique ullamcorper neque, non mollis purus porta non. Proin sed purus sed sapien lobortis sagittis. Curabitur tellus nibh, posuere ac varius sed, vestibulum sed nunc."},
        ac: {url: "images/services/ac.jpg", heading: "Aire acondicionado", paragraph: "Nulla tristique ullamcorper neque, non mollis purus porta non. Proin sed purus sed sapien lobortis sagittis. Curabitur tellus nibh, posuere ac varius sed, vestibulum sed nunc."},
        general: {url: "images/services/mantenimiento.jpg", heading: "Mecánico general", paragraph: "Nulla tristique ullamcorper neque, non mollis purus porta non. Proin sed purus sed sapien lobortis sagittis. Curabitur tellus nibh, posuere ac varius sed, vestibulum sed nunc."},
        muflas: {url: "images/services/muflas.jpg", heading: "Muflas", paragraph: "Nulla tristique ullamcorper neque, non mollis purus porta non. Proin sed purus sed sapien lobortis sagittis. Curabitur tellus nibh, posuere ac varius sed, vestibulum sed nunc."},
        carWash: {url: "images/services/lavado.jpg", heading: "Auto lavado", paragraph: "Nulla tristique ullamcorper neque, non mollis purus porta non. Proin sed purus sed sapien lobortis sagittis. Curabitur tellus nibh, posuere ac varius sed, vestibulum sed nunc."},
        repuestos: { url: "images/services/car-parts.jpeg", heading: "Repuestos", paragraph: "Nulla tristique ullamcorper neque, non mollis purus porta non. Proin sed purus sed sapien lobortis sagittis. Curabitur tellus nibh, posuere ac varius sed, vestibulum sed nunc."}
    }

    const defineTypeContent = (e) =>{
        const type = e.target.name;
        setType(type);
        setModal(type, showModal);
    }

    const setModal = (type, callback) =>{
        setUrl(content[type].url);
        setHeading(content[type].heading);
        setParagraph(content[type].paragraph);
        callback();
    }
    
    const showModal = () => {
        console.log(url, heading, paragraph);
        setContentShow(true);
    }

    return(
        <div className="container">
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
                <Service type="pintura" title="Enderezado y pintura" url="/images/services/pintura.jpg" click={defineTypeContent}></Service>
                <Service type="llantas" title="Llantera" url="images/services/llanta.jpg" click={defineTypeContent}></Service>
                <Service type="lubricentro" title="Lubricentro" url="images/services/lubricentro.jpg" click={defineTypeContent}></Service>
                <Service type="ac" title="Aire acondicionado" url="images/services/ac.jpg" click={defineTypeContent}></Service>
                <Service type="general" title="Mecánico general" url="images/services/mantenimiento.jpg" click={defineTypeContent}></Service>
                <Service type="muflas" title="Muflas" url="images/services/muflas.jpg" click={defineTypeContent}></Service>
                <Service type="carWash" title="Auto lavado" url="images/services/lavado.jpg" click={defineTypeContent}></Service>
                <Service type="repuestos" title="Repuestos" url="images/services/car-parts.jpeg" click={defineTypeContent}></Service>
            </div>
            {contentShow && (
                <div className={styles.serviceContent} show={modalShow} onHide={() => setModalShow(false)}>
                    <Row>
                        <Col className={cn("col", styles.col)}>
                            <img src={url}></img>
                        </Col>
                        <Col className={cn("col", styles.col)}>
                            <h1>{heading}</h1>
                            <p>{paragraph}</p>
                            <Link href="#">
                                <a className="btn btn-primary">Cotizar servicio</a>
                            </Link>
                        </Col>
                    </Row>
                </div>
            )}


        </div>
    )
}