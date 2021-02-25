import { MultiStepForm, Step } from 'react-multi-form';
import PersonalInfo from './personalInfo'
import Quotation from './quotation'
import ServiceCheck from './serviceCheck'
import styles from './form.module.css'
import cn from 'classnames'
import {useRef, useEffect} from 'react'
import emailjs from 'emailjs-com'

export default function MSForm(props){
    const [active, setActive] = React.useState(1);
    const container = useRef();

    function setFormData(){
        const inputValues = {
            service: localStorage.getItem("service"),
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            phone: localStorage.getItem("phone"),
            model: localStorage.getItem("model"),
            year: localStorage.getItem("year"),
            message: localStorage.getItem("message")
        };
        return inputValues;
    }

    function sendEmail(e) {
        e.preventDefault();
        const dataObject = setFormData();
        emailjs.send('service_w7xcwkk', 'template_owp6ne8', dataObject, 'user_opD6c7JPY3hWfFA8RPNFD')
          .then((result) => {
                props.setAlert("alert-success");
                props.setMessage("El mensaje ha sido enviado exitosamente");
                props.setAlertShown(true);
                console.log(result.text);
          }, (error) => {
                props.setAlert("alert-danger");
                props.setMessage(error.text);
                props.setAlertShown(true);
                console.log(error.text);
          });
    }
    
    useEffect(()=>{
        if(screen.width <= 700){
            container.current.classList.remove("shadow-lg");
        }
    })
    
    function checkInputFields(){

    }

    return (
        <div className={cn("container", "shadow-lg" ,styles.container)} ref={container}>
            <h1 className={styles.subHeading} >Cotizar servicio</h1>
            <MultiStepForm activeStep={active}>
                <Step label='Servicio'>
                    <ServiceCheck/>
                </Step>
                <Step label='Datos personales'>
                    <PersonalInfo/>
                </Step>
                <Step label='Consulta'>
                    <Quotation/>
                </Step>
            </MultiStepForm>
            <div className={styles.dirBtns}>
                {active !== 1 && (
                    <button className="btn btn-success" onClick={() => setActive(active - 1)}>Volver</button>
                )}
                {active !== 3 && (
                    <button
                    className="btn btn-success" onClick={() => setActive(active + 1)}
                    style={{ float: 'right' }}
                    >
                    Siguiente
                    </button>
                )}
                {active == 3 &&(
                    <button className={cn("btn btn-success", styles.sendBtn)} onClick={sendEmail}>Enviar</button>
                )}
            </div>
        </div>
    )
}
