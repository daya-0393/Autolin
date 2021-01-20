import Head from 'next/head'
import Header from '../Components/header'
import Footer from '../Components/footer'
import cn from 'classnames'
import MSForm from '../Components/multistepForm/msForm'
import styles from '../Components/cotizacion.module.css'


export default function Cotizacion(){

    return(
        <div className="body">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
                <script src="https://kit.fontawesome.com/da33aea8dd.js" crossorigin="anonymous"></script>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet"></link> 
            </Head>
            <Header></Header>
            <main className={cn("container", styles.container)}>
                <div className="row">
                    <div className={cn("col", styles["col-left"])} id="col-left">
                        <img src="images/taller1.jpg"></img>
                    </div>
                    <div className={cn("col", styles["col-right"])} id="col-right">
                        <MSForm ></MSForm>
                    </div>
                </div>
            </main>
            <Footer></Footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
        </div>
    )
}