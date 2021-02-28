import Header from '../Components/header'
import Footer from '../Components/footer'
import cn from 'classnames'
import MSForm from '../Components/multistepForm/msForm'
import styles from '../Components/cotizacion.module.css'
import {useState} from 'react'


export default function Cotizacion(){
    const [alertShown, setAlertShown] = useState(false);
    const [alert, setAlert] = useState("");
    const [message, setMessage] = useState("");

    return(
        <div>
            <Header></Header>
            <main className={cn("container", styles.container)}>
                <div className={styles["col-left"]} id="col-left">
                    <img src="images/taller1.webp"></img>
                </div>
                <div className={styles["col-right"]} id="col-right">
                    {alertShown &&
                        <div className={cn(`alert ${alert} alert-dismissible fade show`, styles.alert)} role="alert">
                            {message}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }
                    <MSForm setAlert={setAlert} setMessage={setMessage} setAlertShown={setAlertShown}></MSForm>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}