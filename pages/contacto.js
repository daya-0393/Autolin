import Header from '../Components/header'
import Footer from '../Components/footer'
import Head from 'next/head'
import cn from 'classnames'
import Button from 'react-bootstrap/Button'
import ContactForm from '../Components/form'
import styles from '../Components/contact.module.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact(){
    
    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_w7xcwkk', 'template_7sbwshm', e.target, 'user_opD6c7JPY3hWfFA8RPNFD')
          .then((result) => {
                setAlert("alert-success");
                setMessage("El mensaje ha sido enviado exitosamente");
                setShowAlert(true);
                console.log(result.text);
          }, (error) => {
                setAlert("alert-danger");
                setMessage(error.text);
                setShowAlert(true);
                console.log(error.text);
          });

          e.target.reset();
      }

    return(
        <div className="body">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
                <script src="https://kit.fontawesome.com/da33aea8dd.js" crossorigin="anonymous"></script>
            </Head>

            <Header></Header>
            <main className={cn("container", styles.container)}>
                <div className="row">
                    <div className={cn("col-6", styles["left-col"])}>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.668098149269!2d-84.1964894853848!3d9.961547692877547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9ed5bb84efb%3A0xf39fe51c716ab407!2sAutolin!5e0!3m2!1ses-419!2scr!4v1610642606082!5m2!1ses-419!2scr" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <div className="row">
                            <div className={cn("col", styles.info)}>
                                <p><b>Teléfono: </b>+506123456</p>
                                <p><b>Correo: </b>autolin@hotmail.com</p>
                                <p><b>Dirección: </b>Pozos de Santa Ana, San José</p>
                                <p><b>Horario: </b>Lunes - Domingo, 7:00am - 7:00pm</p>
                            </div>
                            <div className={cn("col", styles.mapsBtns)}>
                                <Button className={styles.button}><img src="images/icons/waze.png"></img></Button>
                                <Button className={styles.button}><img src="images/icons/google-maps.png"></img></Button>
                            </div>
                        </div>
                    </div>
                    <div className={cn("col-6", styles["right-col"])}>
                        {showAlert &&
                            <div className={cn(`alert ${alert} alert-dismissible fade show`, styles.alert)} role="alert">
                                {message}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        }
                        <ContactForm submit={sendEmail}></ContactForm>
                    </div>
                </div>
            </main>
            <Footer></Footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
        </div>
    )
}