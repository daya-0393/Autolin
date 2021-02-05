import Form from 'react-bootstrap/Form'
import styles from './form.module.css'
import cn from 'classnames'


export default function ContactForm(props){


    return(
        <Form className={cn("shadow-lg" , styles.form)} onSubmit={props.submit}>
            <h1 className={styles.subHeading}>Contáctenos</h1>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nombre completo<span className="redAstherisc">*</span></label>
                <input type="text" class="form-control" id="formGroupExampleInput" name="name" required></input>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Correo<span className="redAstherisc">*</span></label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="email@ejemplo.com" name="email" required></input>
            </div>
            <label for="basic-url" class="form-label">Teléfono</label>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">+506</span>
                <input type="text" class="form-control" name="phone"></input>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Consulta<span className="redAstherisc">*</span></label>
                <textarea type="text" class="form-control" id="formGroupExampleInput2" name="message" required></textarea>
            </div>
            <input type="submit" class="btn btn-success" value="Enviar"></input>
        </Form>
    )
}