import Head from 'next/head'
import { MultiStepForm, Step } from 'react-multi-form';
import PersonalInfo from './personalInfo'
import CarInfo from './carInfo'
import ServiceCheck from './serviceCheck'
import Confirmation from './confirmation'
import styles from './form.module.css'
import Button from 'react-bootstrap/Button'
import cn from 'classnames'


export default function MSForm(){
    const [active, setActive] = React.useState(1)
    return (
        <div className={cn("container", "shadow-lg" ,styles.container)}>
            <h1 className={styles.subHeading} >Cotizar servicio</h1>
            <MultiStepForm activeStep={active}>
                <Step label='Servicio'>
                    <ServiceCheck/>
                </Step>
                <Step label='Datos personales'>
                    <PersonalInfo/>
                </Step>
                <Step label='Consulta'>
                    <CarInfo />
                </Step>
                <Step label='Confirmación'>
                    <Confirmation/>
                </Step>
            </MultiStepForm>

            {active !== 1 && (
                <Button onClick={() => setActive(active - 1)}>Volver</Button>
            )}
            {active !== 3 && (
                <Button
                onClick={() => setActive(active + 1)}
                style={{ float: 'right' }}
                >
                Siguiente
                </Button>
            )}
        </div>
    )
}
