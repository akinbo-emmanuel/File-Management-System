import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import './SubBar.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const SubBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 px-5">
          <p>Root</p>  

          <ul className="navbar-nav ms-auto">
              <li className="navbar-item mx-2">
                  <button className="btn btn-outline-dark" onClick={handleShow}>
                      <FontAwesomeIcon icon={faFileUpload}/> &nbsp;
                      Upload File
                  </button>
              </li>
          </ul>
      </nav>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="mb-3">
          {/* <label for="formFile" class="form-label">Default file input example</label> */}
          <input class="form-control" type="file" id="formFile" />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SubBar