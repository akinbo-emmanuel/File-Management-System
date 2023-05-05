import React from 'react';

import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import myPdf from '../../../assets/pdf/emmanuelakinbo.pdf';

import './ShowItems.css';

const ShowItems = ({ title, items }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src={ myPdf } width="100%"></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <button type="button" className="btn btn-danger btn-sm">Delete</button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="w-100">
        <h4 className="text-center border-bottom py-2">{title}</h4>
        <div className="row gap-2 p-4 flex-wrap">
            {items.map((item, index) => {
                return (
                  <>
                    <Button key={index * 55} variant="light" className="col-md-2 p-2 text-center border" onClick={() => setModalShow(true)}>
                      <FontAwesomeIcon icon={faFile} /> &nbsp;
                      {item}
                    </Button>

                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                  </>
                )
            })}
        </div>
    </div>
  )
}

export default ShowItems