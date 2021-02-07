import styles from './header.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { useState, useRef } from 'react'

export default function Header(){
    const navbarCollapse = useRef();

    const closeMenu = () =>{
        navbarCollapse.current.classList.remove("show");
    }
    return(
        <div>
            <nav className={cn("navbar", "fixed-top","navbar-expand-lg", styles.navbar)}>
                <div className={cn("container-fluid", styles["container-fluid"])}>
                    <Link href="/">
                        <a className={cn("navbar-brand", styles["navbar-brand"])}>
                            <img src="/images/Logo.png" className={`${styles.logo}`} alt="logo"></img>
                        </a>
                    </Link>
                    <button className={cn("navbar-toggler", styles.togglerBtn)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={cn("collapse", "navbar-collapse", styles["navbar-collapse"])} id="navbarNavAltMarkup" ref={navbarCollapse}>
                        <div className={cn("navbar-nav", styles["navbar-nav"])}> 
                            <Link href="/"><a className={cn("nav-link", styles["nav-link"])} aria-current="page">Inicio</a></Link>
                            <a className={cn("nav-link", styles["nav-link"])}  href="#services" onClick={closeMenu}>Servicios</a>
                            <a className={cn("nav-link", styles["nav-link"])}  href="#work" onClick={closeMenu}>Nuestro trabajo</a>       
                            <Link href="/cotizacion"><a className={cn("nav-link", styles["nav-link"])} >Cotizacion</a></Link>
                            <Link href="/contacto"><a className={cn("nav-link", styles["nav-link"])} >Contáctenos</a></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
