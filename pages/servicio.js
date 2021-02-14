import styles from '../styles/services.module.css'
import Header from '../Components/header'
import Footer from '../Components/footer'
import cn from 'classnames'
import { useState, useEffect, useRef } from 'react'
import { content } from '../lib/serviceContent'
import List from '../Components/list'


export default function Servicios() {
    const [type, setType] = useState("");
    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");
    const [list, setList] = useState([""]);
    const [itemDesc, setItemDesc] = useState([]);
    const [htmlList, setHtmlList] = useState([]);
    const listItem = useRef();


    useEffect(() => {
        setType(sessionStorage.getItem('type'));
        console.log(type);
    }, [type])

    useEffect(() => {
        if (type.length != 0) {
            console.log("entra")
            setSSvalues();
            getSSvalues();
        }
    }, [type])

    const setSSvalues = () => {
        sessionStorage.setItem('list', content[type].list);
        sessionStorage.setItem('heading', content[type].heading);
        sessionStorage.setItem('text', content[type].text);
        sessionStorage.setItem('itemDesc', content[type].itemDesc);
    }
    const getSSvalues = () => {
        if(sessionStorage.getItem('list') != ""){
            setList((sessionStorage.getItem('list')).split(','));
            setItemDesc((sessionStorage.getItem('itemDesc')).split(','))
        }
        setHeading(sessionStorage.getItem('heading'));
        setText(sessionStorage.getItem('text'));
    }

    const handleItemClick = ()=>{

    }

    return (
        <div className="wrapper">
            <Header></Header>
            <main className={styles.container}>
                <div className={cn(styles.col, styles.left)}>
                    <h1 className={cn("heading", styles.heading)}>{heading}</h1>
                    <p className={styles.text}>{text}</p>
                </div>
                <div className={cn(styles.col, styles.right)}>
                    <div className={styles.list}>
                        <List list={list} itemDesc={itemDesc}></List>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}