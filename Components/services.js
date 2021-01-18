
import Service from './service'
import styles from './services.module.css'
import cn from 'classnames'
import Button from 'react-bootstrap/Button'


export default function Services(props){

    return(
        <div className={cn("col-lg-3", "card", "shadow-sm", styles["col-lg-3"])} >
            <img src={`${props.url}`} className={`${styles["service-img"]}`}></img>
            <h5>{`${props.title}`}</h5>
            <Button className={cn(styles.button, styles.hidden)} variant="primary" onClick={() => props.click(true)} onMouseOver={(event)=> showButton(event)}>Abrir</Button>
        </div>
    )
}