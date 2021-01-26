import React, { useState } from 'react'
import FileUploadNew from "../Fileupload/FileUploadNew"
import { Button, Modal } from "react-bootstrap"

import "./ModalPrueba.css"

function ModalPrueba(props) {

    const [show, setshow] = useState(false)

    const handleShow = () => setshow(true)
    const handleClose = () => setshow(false)

    return (
        <>
            <Button className="modalBtn" variant="primary" onClick={handleShow}>
                Upload Image
            </Button>

            <div className="modal">

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select a new Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><FileUploadNew {...props} /> </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default ModalPrueba
