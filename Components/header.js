import styles from './header.module.css'
import cn from 'classnames'
import Link from 'next/link'

export default function Header(){

    return(
        <div>
            <nav className={cn("navbar", "fixed-top","navbar-expand-lg", "navbar-light", styles.navbar)}>
                <div className={cn("container-fluid", styles["container-fluid"])}>
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="/images/Logo.png" className={`${styles.logo}`} alt="logo"></img>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={cn("collapse", "navbar-collapse", styles["navbar-collapse"])} id="navbarNavAltMarkup">
                        <div className="navbar-nav"> 
                            <Link href="/"><a className="nav-link" aria-current="page">Inicio</a></Link>
                            <a className="nav-link" href="#">Servicios</a>
                            <a className="nav-link" href="#">Nuestro trabajo</a>       
                            <Link href="/cotizacion"><a className="nav-link">Cotizacion</a></Link>
                            <Link href="/contacto"><a className="nav-link">Contáctenos</a></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
