import styles from './footer.module.css'
import cn from 'classnames'


export default function Footer() {
    return (

        <footer className={cn("mt-auto", "py-3", styles.footer)}>
            <div className={cn("row", styles.container)}>
                <div className={cn("col-8", styles.left)}>
                    <div className="row">
                        <div className={cn("col", styles.socialMedia)}>
                            <h4>Síguenos</h4>
                            <hr className={`${styles.hr}`}></hr>
                            <a href="https://www.facebook.com/autolin2018/" target="_blank"><i className={cn("fab", "fa-facebook-f", styles.fab)}></i></a>
                            <a href="#"><i className={cn("fab", "fa-instagram", styles.fab)}></i></a>
                        </div>
                        <div className={cn("col", styles.info)}>
                            <h4>Contáctenos</h4>
                            <hr className={`${styles.hr}`}></hr>
                            <p><b>Teléfono: </b>+506 1234567</p>
                            <p><b>Correo: </b>autolin@hotmail.com</p>
                            <p><b>Dirección: </b>Pozos de Santa Ana, San José</p>
                        </div>
                    </div>
                    <div className={cn("row", styles.bttmP)}>
                        <p>&copy; AUTOLIN S.A. &middot; 2021 &middot; Todos los derecehos reservados</p>
                    </div>
                </div>
                <div className={cn("col-4", styles.right)}>

                    <div className={cn("row", styles.arrow)}>
                        <a href="#">
                            <i className={cn("fas", "fa-chevron-up", styles.fas)}></i>
                        </a>
                    </div>

                </div>
            </div>
        </footer>

    )
}