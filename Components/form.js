import Form from 'react-bootstrap/Form'
import styles from './form.module.css'
import cn from 'classnames'
import {useRef, useEffect} from 'react'


export default function ContactForm(props){
    const container = useRef();

    useEffect(()=>{
        if(screen.width <= 700){
            container.current.classList.remove("shadow-lg");
        }
    })
    return(
        <div className={styles.container}>
            <Form className={cn("shadow-lg" , styles.form)} onSubmit={props.submit} ref={container}>
                <h1 className={styles.subHeading}>Contáctenos</h1>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre completo<span className="redAstherisc">*</span></label>
                    <input type="text" className="form-control" id="formGroupExampleInput" name="name" required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Correo<span className="redAstherisc">*</span></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="email@ejemplo.com" name="email" required></input>
                </div>
                <label htmlFor="basic-url" className="form-label">Teléfono</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">+506</span>
                    <input type="text" className="form-control" name="phone"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Consulta<span className="redAstherisc">*</span></label>
                    <textarea type="text" className="form-control" id="formGroupExampleInput2" name="message" required></textarea>
                </div>
                <input type="submit" className="btn btn-success" value="Enviar"></input>
            </Form>
        </div>
    )
}