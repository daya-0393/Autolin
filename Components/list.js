import cn from 'classnames'
import styles from '../styles/services.module.css'

export default function List(props){

    const htmlList = props.list.map((item, index)=>{
        if(props.list != ""){
            return(
                <div className={cn("shadow", styles.item)} key={index}>
                    <p>{item}</p>
                    <div className={styles.listItem} onClick={props.clicked}>
                        <i className={cn("fas fa-angle-double-down", styles.fas)}></i>
                    </div> 
                    <div className={cn(styles.description, styles.hiden)}>
                        <p>
                            {props.itemDesc[index]}
                        </p>
                    </div> 
                </div>
        )}else{
            return null
        }
    })

    return(
        <div className={styles.list}>
            {htmlList}
        </div>
    )
}