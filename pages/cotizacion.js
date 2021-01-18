import Head from 'next/head'
import Header from '../Components/header'
import Footer from '../Components/footer'
import CotizacionForm from '../Components/cotizacionForm'
import styles from '../Components/cotizacionForm.module.css'

export default function Cotizacion(){
    return(
        <div className="body">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
                <script src="https://kit.fontawesome.com/da33aea8dd.js" crossorigin="anonymous"></script>
            </Head>
            <Header></Header>
            <main className="container">
                <CotizacionForm></CotizacionForm>
            </main>
            <Footer></Footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
        </div>
    )
}