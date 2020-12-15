import React from "react";
import Card from 'react-bootstrap/Card';

class PostCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1192101281252495363/c_xL2w3j_400x400.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default PostCard;
