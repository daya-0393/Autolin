import styles from './services.module.css'
import cn from 'classnames'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { useEffect, useRef } from 'react'
import {useState} from 'react'
import {useRouter} from 'next/router'

export default function Service(props){
    const style = {backgroundImage: 'url(' + props.url + ')'}
    const [btnShown, setBtnShown] = useState(false);
    const [type, setType] = useState("");
    const router = useRouter();

    useEffect(()=>{
        if(screen.width <= 770){
            setBtnShown(true);
        }
    })

    return(

        <div className={cn("col", styles.col)} type={type} onMouseEnter={() => setBtnShown(true)} onMouseLeave={()=> setBtnShown(false)}>
          <div className={styles.card} style={style}>
            <div className={styles["color-overlay"]}></div>
            <div className={styles.titleCont}>
                <h4>{`${props.title}`}</h4>
            </div>
            {btnShown && (
                <div className={styles.btnCont}>
                    <Button variant="primary" onClick={()=> router.push({pathname:'/servicio', query: {id:props.type}})} name={props.type}>
                        Ver más
                    </Button>
                </div>
            )}
          </div>
        </div>
    )
}