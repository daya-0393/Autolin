import React, { useEffect, useState } from 'react'
import styles from './form.module.css'
import cn from 'classnames'
import Form from 'react-bootstrap/Form'


export default function ServiceCheck(props){

  const [inputValue, setInputValue] = useState();
  const onChange = (e) =>{
    setInputValue(e.target.value);
  }

  useEffect(()=>{
    localStorage.setItem('service', inputValue);
  }, [inputValue]);

  return (
    <Form className={styles.form}>
      <div className='row'>
        <div className="col">
          <div className={cn("form-check", styles["form-check"])}>
            <input className="form-check-input" type="radio" value="general" id="flexRadioDefault1" name="service" onChange={onChange}></input>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Mecánico general
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input className="form-check-input" type="radio" value="pintura" id="flexRadioDefault2" name="service" onChange={onChange}></input>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Enderezado y pintura
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input className="form-check-input" type="radio" value="ac" id="flexRadioDefault3" name="service" onChange={onChange}></input>
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Aire acondicionado
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input className="form-check-input" type="radio" value="muflas" id="flexRadioDefault4" name="service" onChange={onChange}></input>
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              Muflas
            </label>
          </div>
        </div>
        <div className="col">
          <div className={cn("form-check", styles["form-check"])}>
            <input className="form-check-input" type="radio" value="lubricentro" id="flexRadioDefault5" name="service" onChange={onChange}></input>
            <label className="form-check-label" htmlFor="flexRadioDefault5">
              Lubricentro
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input className="form-check-input" type="radio" value="llantera" id="flexRadioDefault6" name="service" onChange={onChange}></input>
            <label className="form-check-label" htmlFor="flexRadioDefault6">
              Llantera y tramado
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input className="form-check-input" type="radio" value="autolavado" id="flexRadioDefault7" name="service" onChange={onChange}></input>
            <label className="form-check-label" htmlFor="flexRadioDefault7">
              Autolavado
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input className="form-check-input" type="radio" value="repuestos" id="flexRadioDefault8" name="service" onChange={onChange}></input>
            <label className="form-check-label" htmlFor="flexRadioDefault8">
              Repuestos
            </label>
          </div>
        </div>
      </div>
    </Form>

  )
}
