
import styles from './services.module.css'
import cn from 'classnames'
import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'
import {useState} from 'react'

export default function Service(props){
    const style = {backgroundImage: 'url(' + props.url + ')'}
    const [btnShown, setBtnShown] = useState(false);

    return(
        <div className={cn("col", "card", styles["col-lg-3"])} style={style} type={props.type}
            onMouseEnter={() => setBtnShown(true)} 
            onMouseLeave={()=> setBtnShown(false)}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet"></link> 
            </Head>
            <div className={styles["color-overlay"]}>
            </div>
            <h4>{`${props.title}`}</h4>
            {btnShown && (
                <Button variant="primary" onClick={props.click} name={props.type}>
                    Ver más
                </Button>
            )}
        </div>
    )
}