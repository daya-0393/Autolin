import React, { useState } from 'react'
import styles from './form.module.css'
import cn from 'classnames'
import Form from 'react-bootstrap/Form'


export default () => {

  return (
    <Form className={styles.form}>
      <div className='row'>
        <div className="col">
          <div className={cn("form-check", styles["form-check"])}>
            <input class="form-check-input" type="checkbox" value="general" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">
              Mecánico general
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input class="form-check-input" type="checkbox" value="pintura" id="flexCheckChecked"></input>
            <label class="form-check-label" for="flexCheckChecked">
              Enderezado y pintura
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input class="form-check-input" type="checkbox" value="ac" id="flexCheckChecked"></input>
            <label class="form-check-label" for="flexCheckChecked">
              Aire acondicionado
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input class="form-check-input" type="checkbox" value="muflas" id="flexCheckChecked"></input>
            <label class="form-check-label" for="flexCheckChecked">
              Muflas
            </label>
          </div>
        </div>
        <div className="col">
          <div className={cn("form-check", styles["form-check"])}>
            <input class="form-check-input" type="checkbox" value="lubricentro" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">
              Lubricentro
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input class="form-check-input" type="checkbox" value="llantera" id="flexCheckChecked"></input>
            <label class="form-check-label" for="flexCheckChecked">
              Llantera y tramado
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input class="form-check-input" type="checkbox" value="autolavado" id="flexCheckChecked"></input>
            <label class="form-check-label" for="flexCheckChecked">
              Autolavado
            </label>
          </div>
          <div className={cn("form-check", styles["form-check"])}>
            <input class="form-check-input" type="checkbox" value="repuestos" id="flexCheckChecked"></input>
            <label class="form-check-label" for="flexCheckChecked">
              Repuestos
            </label>
          </div>
        </div>
      </div>
    </Form>

  )
}
