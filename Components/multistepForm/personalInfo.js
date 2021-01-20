import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import styles from './form.module.css'

export default function PersonalInfo() {

  return (
    <Form className={styles.form}>
      <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Nombre completo</label>
          <input type="text" class="form-control" id="formGroupExampleInput"></input>
      </div>
      <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Correo</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="email@ejemplo.com"></input>
      </div>
      <label for="basic-url" class="form-label">Teléfono</label>
      <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">+506</span>
          <input type="text" class="form-control"></input>
      </div>
    </Form>
  )
}
