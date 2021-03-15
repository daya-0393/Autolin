import Benefit from './benefit'
import styles from './benefits.module.css'
import cn from 'classnames'

export default function Benefits(){
    return(

        <div className={cn("row", styles.container)}>
            <Benefit url="/images/icons/hands.webp">
                <h2 className={styles.subHeading}>Confianza</h2>
                <p>Somos un taller con amplia trayectoria y solidez. Por eso nuestros clientes confían en nuestro trabajo.</p>
            </Benefit>
            <Benefit url="/images/icons/list.webp">
                <h2 className={styles.subHeading}>Variedad de servicios</h2>
                <p>Nuestra variedad de servicios nos permite trabajar de una manera más eficiente y así nos permite reducir considerablemente los tiempos de entrega de los vehículos de nuestros clientes.</p>
            </Benefit>
            <Benefit url="/images/icons/talking.webp">
                <h2 className={styles.subHeading}>Atención personalizada</h2>
                <p>Nos encargamos de brindar un servcio especializado, que se ajuste a las necesidades de cada uno de nuestros clientes.</p>
            </Benefit>
            <Benefit url="/images/icons/shield.webp">
                <h2 className={styles.subHeading}>Garantía</h2>
                <p>100% comprometidos a brindar excelentes resultados en cada uno de nuestros trabajos.</p>
            </Benefit>
            <Benefit url="/images/icons/innovation.webp">
                <h2 className={styles.subHeading}>Innovación</h2>
                <p>Constantemente estamos innovando para ofrecer en cada uno de nuestros servicios lo ultimo en el mercado.</p>
            </Benefit>
            <Benefit url="/images/icons/star.webp">
                <h2 className={styles.subHeading}>Calidad</h2>
                <p>Ofrecemos un servicio de alta calidad, procurando siempre que nuestro trabajo sobrepase las espectativas de nuestros clientes.</p>
            </Benefit>
            
        </div>
    )
}