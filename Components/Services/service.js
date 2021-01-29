import styles from './services.module.css'
import cn from 'classnames'
import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import { useEffect, useRef } from 'react'
import {useState} from 'react'

export default function Service(props){
    const style = {backgroundImage: 'url(' + props.url + ')'}
    const [btnShown, setBtnShown] = useState(false);

    useEffect(()=>{
        if(screen.width <= 770){
            setBtnShown(true);
        }
    })

    return(

        <div class={cn("col", styles.col)} type={props.type} onMouseEnter={() => setBtnShown(true)} onMouseLeave={()=> setBtnShown(false)}>
          <div class={styles.card} style={style}>
            <div className={styles["color-overlay"]}></div>
            <h4>{`${props.title}`}</h4>
            {btnShown && (
                <Button variant="primary" onClick={props.click} name={props.type}>
                    Ver más
                </Button>
            )}
          </div>
        </div>
    )
}