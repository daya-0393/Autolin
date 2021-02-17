import styles from '../styles/service.module.css'
import Header from '../Components/header'
import Footer from '../Components/footer'
import cn from 'classnames'
import { useState, useEffect, useRef } from 'react'
import {content} from '../lib/serviceContent'
import List from '../Components/list'


export default function Servicios() {
    const [type, setType] = useState("");
    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");
    const [list, setList] = useState([""]);
    const [itemDesc, setItemDesc] = useState([]);
    const [url, setUrl] = useState("");
    const [htmlList, setHtmlList] = useState([]);
    const listItem = useRef();


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

    const handleItemClick = ()=>{

    }

    return (
        <div className="wrapper">
            <Header></Header>
            <main className={styles.container}>
                <h1 className={cn("heading", styles.heading)}>{heading}</h1>
                <div className={styles.content}>
                    
                </div>
                <p className={styles.text}>{text}</p>
                <List list={list} itemDesc={itemDesc}></List>
                <button className={cn("btn btn-success", styles.btn)}>Cotizar servicio</button>
            </main>
            <Footer></Footer>
        </div>
    )
}