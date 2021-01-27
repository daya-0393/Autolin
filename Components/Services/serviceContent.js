import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './modal.module.css'
import cn from 'classnames'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import ModalDialog from 'react-bootstrap/ModalDialog'

export default function ServiceContent(props) {

    const style = {backgroundImage: 'url(' + props.url + ')'}

    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" dialogClassName={styles.modal} centered>
          <Modal.Body>
            <div className={cn("container", styles.container)} style={style}>
              <Row>
                <div className={cn("shadow", styles.content, styles[props.type])}>
                    <h1>{props.heading}</h1>
                    <p>{props.paragraph}</p>
                    <Link href="#">
                      <a className="btn btn-primary">Cotizar servicio</a>
                    </Link>
                </div>
              </Row>
            </div>
          </Modal.Body>
      </Modal>
    );
  }