import React from "react";
import Card from 'react-bootstrap/Card';
import ModalBox from '../ModalBox/ModalBox';

class PostCard extends React.Component {

  render() {
    return (
      <Card className="col-10 offset-2 m-3">
        <Card.Img 
        variant="top" 
        src={this.props.imageUrl} />
        <Card.Body>
          <Card.Title>{this.props.userName}</Card.Title>
          <Card.Text>
            {this.props.caption}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated {this.props.timeStamp}</small>
          <ModalBox 
            imageUrl={this.props.imageUrl}
            userName={this.props.userName}
            caption={this.props.caption}
          />
        </Card.Footer>
      </Card>
    );
  }
}

export default PostCard;
