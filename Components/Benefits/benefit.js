
import styles from './benefits.module.css'
import cn from 'classnames'

export default function Benefit(props){
    return(
        <div className={cn("col", styles.item)}>
            <img className={styles.benefitsImage} src={props.url}></img>
            {props.children}
        </div>
    )
}