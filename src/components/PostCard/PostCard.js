import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import TimeAgo from "react-timeago";

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: false,
      show: false,
    }
  }

  openModal = () => {
    this.setState({ show: true });
  } 

  closeModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <Card className="col-10 offset-2 m-3">
        <Card.Img onClick={this.openModal} variant="top" src={this.props.imageUrl} />
        
        <Card.Body>
          <Card.Title>{this.props.userName}</Card.Title>
          <Card.Text>{this.props.caption}</Card.Text>
        </Card.Body>

        <Card.Footer>
          <small>
            <TimeAgo date={this.props.timeStamp} />
          </small>
          <br />

          <Modal show={this.state.show} onHide={this.closeModal}>
            <Modal.Header closeButton />
    
            <Modal.Body>
              <Card.Img variant="top" src={this.props.imageUrl} />
              
              <Card.Body>
                <Card.Title>{this.props.userName}</Card.Title>
                <Card.Text>{this.props.caption}</Card.Text>
              </Card.Body>
            </Modal.Body>
          </Modal>
          
        </Card.Footer>
      </Card>
    );
  }
}


export default PostCard;
