import Service from './service'
import {useRef, useState} from 'react'
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import {content} from './content'
import styles from './services.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
      position: 'relative'
    }
  }));

export default function Services(){
    const classes = useStyles();
    const [url, setUrl] = useState("e");
    const [heading, setHeading] = useState("e");
    const [text, setText] = useState("e");
    const [type, setType] = useState("");
    const [checked, setChecked] = React.useState(false);
    const serviceCont = useRef();

    const setServiceContent = (type, callback) => {
        setUrl(content[type].url);
        setHeading(content[type].heading);
        setText(content[type].paragraph);
        callback();
    }

    const showContent = () =>{
        setChecked((prev) => !prev);
        serviceCont.current.scrollIntoView({
            behavior: "smooth", 
            block: "nearest"
        })
    }

    const defineContentType = (e) =>{
        const type = e.target.name;
        setType(type);
        setServiceContent(type, showContent)
    }

    return(
        <div className="container">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.1/react-with-addons.js"></script>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
                <Service type="pintura" title="Enderezado y pintura" url="/images/services/pintura.jpg" click={defineContentType}></Service>
                <Service type="llantas" title="Llantera" url="images/services/llanta.jpg" click={defineContentType}></Service>
                <Service type="lubricentro" title="Lubricentro" url="images/services/lubricentro.jpg" click={defineContentType}></Service>
                <Service type="ac" title="Aire acondicionado" url="images/services/ac.jpg" click={defineContentType}></Service>
                <Service type="general" title="Mecánico general" url="images/services/mantenimiento.jpg" click={defineContentType}></Service>
                <Service type="muflas" title="Muflas" url="images/services/muflas.jpg" click={defineContentType}></Service>
                <Service type="carWash" title="Auto lavado" url="images/services/lavado.jpg" click={defineContentType}></Service>
                <Service type="repuestos" title="Repuestos" url="images/services/car-parts.jpeg" click={defineContentType}></Service>
            </div>

            <div className={classes.root} ref={serviceCont}>
                <div className={classes.container}>
                    <Collapse in={checked}>
                        <Paper elevation={4} className={classes.paper}>
                            <button className={styles.closeBtn} onClick={showContent}><i class="fas fa-minus"></i></button>
                            <h1>{heading}</h1>
                            <p>{text}</p>
                        </Paper>
                    </Collapse>
                </div>
            </div>
            
        </div>
    )
}