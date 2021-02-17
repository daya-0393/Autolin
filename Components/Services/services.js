import Service from './service'
import React from 'react';
import cn from 'classnames';
import styles from './services.module.css'
import Carousel from 'react-elastic-carousel'
import {content} from '../../lib/serviceContent'

const breakpoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
]

export default function Services() {

    return (
        <>
            <div className={styles.container}>
                <Carousel breakPoints={breakpoints}>
                    <Service type="pintura" title="Enderezado y pintura" url="/images/services/pintura.webp" text={content["pintura"].text} list={content["pintura"].list}></Service>
                    <Service type="ac" title="Aire acondicionado" url="images/services/ac.webp" text={content["ac"].text} list={content["ac"].list}></Service>
                    <Service type="lubricentro" title="Lubricentro" url="images/services/lubricentro.webp" text={content["lubricentro"].text} list={content["lubricentro"].list}></Service>
                    <Service type="llantas" title="Llantera" url="images/services/llanta.webp" text={content["llantas"].text} list={content["llantas"].list}></Service>
                    <Service type="general" title="Mecánico general" url="images/services/mantenimiento.webp" text={content["general"].text} list={content["general"].list}></Service>
                    <Service type="carWash" title="Auto lavado" url="images/services/lavado.webp" text={content["carWash"].text} list={content["carWash"].list}></Service>
                    <Service type="muflas" title="Muflas" url="images/services/muflas.webp" text={content["muflas"].text} list={content["muflas"].list}></Service>
                    <Service type="repuestos" title="Repuestos" url="images/services/car-parts.webp" text={content["repuestos"].text} list={content["repuestos"].list}></Service>
                </Carousel>
            </div>
        </>
    )
}