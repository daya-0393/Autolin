import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import styles from './form.module.css'

export default function Quotation(props) {

  const [inputName, setInputName] = useState();
  const [inputValue, setInputValue] = useState();

  const onChange = (e) =>{
    setInputName(e.target.name);
    setInputValue(e.target.value); 
  }
  useEffect(()=>{
    localStorage.setItem(inputName, inputValue);
  }, [inputValue]);
  
  return (
    <Form className={styles.form}>
      <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Modelo del vehículo<span className="redAstherisc">*</span></label>
          <input type="text" className="form-control" id="formGroupExampleInput" name="model" onChange={onChange} required></input>
      </div>
      <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Año del vehículo<span className="redAstherisc">*</span></label>
          <input type="text" className="form-control" id="formGroupExampleInput2" name="year" onChange={onChange} required></input>
      </div>
      <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Descripción del problema<span className="redAstherisc">*</span></label>
          <textarea type="text" className="form-control" id="formGroupExampleInput2" name="message" onChange={onChange} required></textarea>
      </div>
    </Form>
  )
}
