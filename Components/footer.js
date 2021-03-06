import styles from './footer.module.css'
import cn from 'classnames'


export default function Footer() {
    return (

        <footer className={cn("mt-auto", "py-3", styles.footer)}>
            <div className={styles.container}>
                <div className={cn(styles.info, styles.col)}>
                    <div className={styles["info-left"]}>
                        <h4>Contáctenos</h4>
                        <hr className={styles.hr}></hr>
                        <p><b>Teléfono: </b>+506 22031985</p>
                        <p><b>Correo: </b>refaccioneselectrocar@gmail.com</p>
                        <p><b>Dirección: </b>Pozos de Santa Ana, San José</p>
                    </div>
                    <div className={styles["info-right"]}>
                        <h4>Síguenos en</h4>
                        <hr className={styles.hr}></hr>
                        <a href="https://www.facebook.com/autolin2018/" target="_blank"><i aria-hidden className={cn("fab", "fa-facebook-f", styles.fab)}></i></a>
                    </div>
                </div>
                <div className={cn(styles.right, styles.col)}>
                    <a href="#" className={styles.arrow}>
                        <i aria-hidden className={cn("fas", "fa-chevron-up", styles.fas)}></i>
                    </a>
                </div>
            </div>
            <div className={cn("row", styles.bttmP)}>
                <p>&copy; AUTOLIN S.A. &middot; 2021 &middot; Todos los derecehos reservados</p>
            </div>
        </footer>

    )
}