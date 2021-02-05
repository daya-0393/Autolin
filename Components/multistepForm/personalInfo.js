import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import styles from './form.module.css'

export default function PersonalInfo() {

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
          <label htmlFor="formGroupExampleInput" className="form-label">Nombre completo<span className="redAstherisc">*</span></label>
          <input type="text" className="form-control" id="formGroupExampleInput" name="name" onChange={onChange} required></input>
      </div>
      <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Correo<span className="redAstherisc">*</span></label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="email@ejemplo.com" name="email" onChange={onChange} required></input>
      </div>
      <label htmlFor="basic-url" className="form-label">Teléfono</label>
      <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">+506</span>
          <input type="text" className="form-control" name="phone" onChange={onChange} required></input>
      </div>
    </Form>
  )
}
