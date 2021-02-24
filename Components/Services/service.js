import styles from './services.module.css'
import cn from 'classnames'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { useEffect} from 'react'
import {useState} from 'react'
import {useRouter} from 'next/router'

export default function Service(props){
    const style = {backgroundImage: 'url(' + props.url + ')'}
    const [btnShown, setBtnShown] = useState(false);
    const [type, setType] = useState("");
    const [listFound, setListFound] = useState();
    const router = useRouter();

    useEffect(()=>{
        if(props.list != ""){
            setListFound(true);
        }else{
            setListFound(false);
        }
    }, [])

    return(

        <div className={cn("col", styles.col)} type={type} onMouseEnter={() => setBtnShown(true)} onMouseLeave={() => setBtnShown(false)}>
            <div className={styles.card} style={style}></div>
            <div className={styles.text}>
                <h4>{`${props.title}`}</h4>
                <p>{props.text}</p>
                { listFound && (
                    <a className={styles.link} onClick={()=>{
                        sessionStorage.setItem('type', props.type);
                        router.push({pathname:'/servicio'});
                    }}>Ver más...</a>
                )}
            </div>
            <div className={styles.btn}>
                <Link href="/cotizacion">
                    <Button variant="primary">Cotizar servicio</Button>
                </Link>
            </div>
        </div>
    )
}