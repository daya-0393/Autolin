import Benefit from './benefit'
import styles from './benefits.module.css'
import cn from 'classnames'

export default function Benefits(){
    return(

        <div className={cn("row", styles.container)}>
            <Benefit url="/images/icons/tools.png">
                <h2 className={styles.subHeading}>Heading</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </Benefit>
            <Benefit url="/images/icons/quality.png">
                <h2 className={styles.subHeading}>Heading</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus.</p>
            </Benefit>
            <Benefit url="/images/icons/steering-wheel.png">
                <h2 className={styles.subHeading}>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod.</p>
            </Benefit>
        </div>
    )
}