import Header from '../Components/header'
import Footer from '../Components/footer'
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

    function openMap(e){
        window.open("https://goo.gl/maps/ZBhNgoXJG1EEuX4Z8");
    }

    return(
        <div>
            <Header></Header>
            <main className={cn("container", styles.container)}>
                
                <div className={cn(styles["left-col"])}>
                    <div className={styles.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.668098149269!2d-84.1964894853848!3d9.961547692877547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9ed5bb84efb%3A0xf39fe51c716ab407!2sAutolin!5e0!3m2!1ses-419!2scr!4v1610642606082!5m2!1ses-419!2scr" width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                    <div className="row">
                        <div className={styles.info}>
                            <p><b>Teléfono: </b>+506123456</p>
                            <p><b>Correo: </b>autolinautomotriz@gmail.com</p>
                            <p><b>Dirección: </b>Pozos de Santa Ana, San José</p>
                            <p><b>Horario: </b>Lunes - Domingo, 7:00am - 7:00pm</p>
                        </div>
                        <div className={styles.mapsBtns}>
                            <Button className={styles.button} onClick={openMap} name="maps"><img src="images/icons/google-maps.png" name="maps" data-bs-toggle="tooltip" data-bs-placement="top" title="Abrir en Google Maps"></img></Button>
                        </div>
                    </div>
                </div>
                <div className={cn(styles["right-col"])}>
                    {showAlert &&
                        <div className={cn(`alert ${alert} alert-dismissible fade show`, styles.alert)} role="alert">
                            {message}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }
                    <ContactForm submit={sendEmail}></ContactForm>
                </div>
            </main>
            <Footer></Footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
        </div>
    )
}