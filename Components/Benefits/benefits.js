import Benefit from './benefit'
import styles from './benefits.module.css'
import cn from 'classnames'

export default function Benefits(){
    return(

        <div className={cn("row", styles.container)}>
            <Benefit url="/images/icons/hands.webp">
                <h2 className={styles.subHeading}>Confianza</h2>
                <p>Nuestra variedad de servicios nos permite trabajar de una manera más eficiente y así nos permite reducir considerablemente los tiempos de entrega de los vehículos de nuestros clientes.</p>
            </Benefit>
            <Benefit url="/images/icons/list.webp">
                <h2 className={styles.subHeading}>Variedad de servicios</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus.</p>
            </Benefit>
            <Benefit url="/images/icons/talking.webp">
                <h2 className={styles.subHeading}>Atención personalizada</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod.</p>
            </Benefit>
            <Benefit url="/images/icons/shield.webp">
                <h2 className={styles.subHeading}>Garantía</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod.</p>
            </Benefit>
            <Benefit url="/images/icons/innovation.webp">
                <h2 className={styles.subHeading}>Innovación</h2>
                <p>Constantemente estamos innovando para cumplir con las expectativas de nuestros.</p>
            </Benefit>
            <Benefit url="/images/icons/star.webp">
                <h2 className={styles.subHeading}>Calidad</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod.</p>
            </Benefit>
            
        </div>
    )
}