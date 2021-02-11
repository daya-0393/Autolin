import styles from '../styles/services.module.css'
import Header from '../Components/header'
import Footer from '../Components/footer'
import cn from 'classnames'
import { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import {content} from '../lib/serviceContent'


export default function Servicios(){
    const router = useRouter();
    const type = router.query;
    const list = content[type.id].list;
    const [htmlList, setHtmlList] = useState([]);

    const getListItems = () =>{
        setHtmlList((content[type.id].list).map((item)=>{
            return <li>{item}</li>
        }))
    }

    return(
        <div onLoad={getListItems}>
            <Header></Header>
            <main className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.img}>
                        <img src={content[type.id].url}></img>
                    </div>
                    <div className={styles.text}>
                        <h1>{content[type.id].heading}</h1>
                        <p>{content[type.id].text}</p>
                        <ul>
                            {htmlList}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}