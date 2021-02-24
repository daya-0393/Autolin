import '../styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="HandheldFriendly" content="true"></meta>
                <meta name="description" content="Somos un taller que brinda una gran variedad de servicios, entre los que se encuentran: Mecánica generla, Enderezado y pintura, Lubricentro, Aire acondicionado, Llantera y tramado, Autolavado entre otros."></meta>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
                <title>autolin</title>
                
            </Head>
            <Component {...pageProps} />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>                  
            <script src="https://kit.fontawesome.com/da33aea8dd.js" crossOrigin="anonymous"></script>
        </div>
    ) 
}
  