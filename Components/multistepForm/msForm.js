import { MultiStepForm, Step } from 'react-multi-form';
import PersonalInfo from './personalInfo'
import Quotation from './quotation'
import ServiceCheck from './serviceCheck'
import styles from './form.module.css'
import cn from 'classnames'
import {useRef, useEffect, useState} from 'react'
import emailjs from 'emailjs-com'

export default function MSForm(props){
    const [active, setActive] = React.useState(1);
    const [formCompleted, setFormCompleted] = useState(false);
    const container = useRef();
    const form = useRef();

    function setFormData(){
        const inputValues = {
            service: sessionStorage.getItem("service"),
            name: sessionStorage.getItem("name"),
            email: sessionStorage.getItem("email"),
            phone: sessionStorage.getItem("phone"),
            model: sessionStorage.getItem("model"),
            year: sessionStorage.getItem("year"),
            message: sessionStorage.getItem("message")
        };
        return inputValues;
    }

    function checkInputValues(obj){
        
        for(const prop in obj){
            if(obj[prop] === ''){
                setFormCompleted(false);
                break;
            }else if(obj[prop] !== ''){
                setFormCompleted(true);
            }
        }
        console.log(formCompleted);
    }

    function sendEmail(e) {
        e.preventDefault();
        const dataObject = setFormData();
        checkInputValues(dataObject);
        if(formCompleted === true){
            emailjs.send('service_mhgvbzu', 'template_mqowvqo', dataObject, 'user_ljapuPuwCBJf3oCWtH4WZ')
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
        }else{
            props.setAlert("alert-danger");
            props.setMessage("Complete todos los campos");
            props.setAlertShown(true);
        }
    }
    
    useEffect(()=>{
        if(screen.width <= 700){
            container.current.classList.remove("shadow-lg");
        }
    })
 

    return (
        <div className={cn("container", "shadow-lg" ,styles.container)} ref={container}>
            <h1 className={styles.subHeading}>Cotizar servicio</h1>
            <MultiStepForm activeStep={active}>
                <Step label='Servicio'>
                    <ServiceCheck form={form}/>
                </Step>
                <Step label='Datos personales'>
                    <PersonalInfo form={form}/>
                </Step>
                <Step label='Consulta'>
                    <Quotation form={form}/>
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
