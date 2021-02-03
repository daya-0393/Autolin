import '../styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="HandheldFriendly" content="true"></meta>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous"></link>
                <script src="https://kit.fontawesome.com/da33aea8dd.js" crossorigin="anonymous"></script>
            </Head>
            <Component {...pageProps} />
        </div>
    ) 
}
  