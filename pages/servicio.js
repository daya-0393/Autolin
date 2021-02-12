import styles from '../styles/services.module.css'
import Header from '../Components/header'
import Footer from '../Components/footer'
import cn from 'classnames'
import { useState, useEffect, useRef } from 'react'
import {useRouter} from 'next/router'
import {content} from '../lib/serviceContent'


export default function Servicios(){
    const [type, setType] = useState("");
    const [htmlList, setHtmlList] = useState([]);
    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");
    const listItem = useRef();

    useEffect(()=>{
        console.log(sessionStorage.getItem('type'))
        setType(sessionStorage.getItem('type'));
        setHeading(sessionStorage.getItem('heading'));
        setText(sessionStorage.getItem('text'));
    })

    const expandShadow= (e) =>{
        console.log(e.target);
    }

    const hideShadow= (e) =>{
        console.log(e.target.key);
    }

    useEffect(()=>{
        if(sessionStorage.list != null || sessionStorage != ''){
            setHtmlList(sessionStorage.list.split(',').map((item, index)=>{
                return(
                    <div className={cn("shadow", styles.item)} key={index} ref={listItem} onMouseEnter={expandShadow} onMouseLeave={hideShadow}>
                        <p>{item}</p>
                        <i className={cn("fas fa-angle-double-down", styles.fas)}></i>
                    </div> 
                ) 
                
            }));
        }
    },[])

    const setServiceContent = ()=>{
        sessionStorage.setItem('heading', content[type].heading);
        sessionStorage.setItem('text', content[type].text);
        sessionStorage.setItem('list', content[type].list);
    }
    
    return(
        <div onLoad={setServiceContent} className="wrapper">
            <Header></Header>
            <main className={cn("container", styles.container)}>
                <h1 className={cn("heading", styles.heading)}>{heading}</h1>
                <p className={styles.text}>{text}</p>
                <div className={styles.list}>
                    {htmlList}
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}