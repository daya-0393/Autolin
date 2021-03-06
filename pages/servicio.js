import styles from '../styles/service.module.css'
import Header from '../Components/header'
import Footer from '../Components/footer'
import cn from 'classnames'
import { useState, useEffect} from 'react'
import {content} from '../lib/serviceContent'
import List from '../Components/list'
import Link from 'next/Link'


export default function Servicios() {
    const [type, setType] = useState("");
    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");
    const [list, setList] = useState([""]);
    const [itemDescription, setItemDesc] = useState([]);
    const [url, setUrl] = useState("");
    const style = {backgroundImage: 'url(' + url + ')'}

    useEffect(() => {
        setType(sessionStorage.getItem('type'));
    }, [type])

    useEffect(() => {
        if (type.length != 0) {
            setSSvalues();
            getSSvalues();
        }
    }, [type])

    const setSSvalues = () => {
        sessionStorage.setItem('list', content[type].list);
        sessionStorage.setItem('heading', content[type].heading);
        sessionStorage.setItem('text', content[type].text);
        sessionStorage.setItem('itemDesc', content[type].itemDesc);
        sessionStorage.setItem('url', content[type].url);
    }
    const getSSvalues = () => {
        if(sessionStorage.getItem('list') != ""){
            setList((sessionStorage.getItem('list')).split(','));
            setItemDesc((sessionStorage.getItem('itemDesc')).split(','))
        }
        setHeading(sessionStorage.getItem('heading'));
        setText(sessionStorage.getItem('text'));
        setUrl(sessionStorage.getItem('url'));
    }

    return (
        <div className="wrapper">
            <Header></Header>
            <main className={styles.container}>
                <div  style={style}className={cn("col", styles.img)}>
                </div>
                <div className="col">
                    <div className={styles.content}>
                        <h1 className={cn("heading", styles.heading)}>{heading}</h1>
                        <p>{text}</p>
                        <List list={list} itemDesc={itemDescription}></List>
                        <Link href="/cotizacion">
                            <button className={cn("btn btn-success", styles.btn)}>Cotizar servicio</button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}