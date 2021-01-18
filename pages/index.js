import Head from 'next/head'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Carousel from '../Components/carousel'
import Gallery from '../Components/gallery'
import Service from '../Components/service'
import Services from '../Components/services'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React, {useState} from 'react'


export default function Index() {
  
  const [modalShow, setModalShow] = useState(false);

  return (
      <div className="body">
        <div className="whatsapp">
          <a href="#"><img src="images/whatsapp.png"></img></a>
        </div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous"></link>
          <script src="https://kit.fontawesome.com/da33aea8dd.js" crossorigin="anonymous"></script>
        </Head>

        <Header></Header>
        
        <div className="bd-img">
          <h1>Esto es una prueba</h1>
        </div>
        
        <main className="container">
          <div className="row benefitsSection">
            <h1 className="heading">Beneficios</h1>
            <div className="col-lg-4">
            <img className="benefitsImage" src="/images/tools.png"></img>
              <h2>Heading</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            </div>
            <div className="col-lg-4">
            <img className="benefitsImage" src="/images/quality.png"></img>
              <h2>Heading</h2>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            </div>
            <div className="col-lg-4">
            <img className="benefitsImage" src="/images/steering-wheel.png"></img>
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <Modal show={modalShow} onHide={() => setModalShow(true)} />

          <div className="row servicess">
            <h1 className="heading">Servicios</h1>
            <div className="row">
              <Services type="pintura" title="Enderezado y pintura" url="/images/spray-paint.png" click={setModalShow}></Services>
              <Services type="general" title="Mecánico general" url="images/settings.png" click={setModalShow}></Services>
              <Services type="lubricentro" title="Lubricentro" url="images/oil.png" click={setModalShow}></Services>
              <Services type="ac" title="Aire acondicionado" url="images/fan.png" click={setModalShow}></Services>
            </div>
            <div className="row services">
              <Services type="llantas" title="Llantera y tramado" url="images/tyre.png" click={setModalShow}></Services>
              <Services type="muflas" title="Muflas" url="images/muffler.png" click={setModalShow}></Services>
              <Services type="carWash" title="Auto lavado" url="images/car-wash.png" click={setModalShow}></Services>
              <Services type="repuestos" title="Repuestos" url="#" click={setModalShow}></Services>
            </div>

          </div>

          <hr className="featurette-divider"></hr>

          <div className="row gallery">
            <h1 className="heading">Nuestro trabajo</h1>
            <Gallery></Gallery>
          </div>
        </main>

        <Footer></Footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </div>
  )
}
