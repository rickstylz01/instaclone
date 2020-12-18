import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ModalBox = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img 
          variant="top" 
          src={props.imageUrl} />
          <Card.Body>
            <Card.Title>{props.userName}</Card.Title>
            <Card.Text>
              {props.caption}
            </Card.Text>
          </Card.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button 
          variant="secondary" 
          onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBox

// render(<Example />);