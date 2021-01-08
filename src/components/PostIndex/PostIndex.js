import React from "react";
import PostCard from '../PostCard/PostCard';
import Row from 'react-bootstrap/Row';

class PostIndex extends React.Component {

  render() {
    return (
        <Row className="mt-3 justify-content-center">
          {this.props.data.map(post => (
            <PostCard 
              imageUrl={post.image_url}
              userName={post.username}
              caption={post.caption}
              timeStamp={post.created_at}
              key={post.id}
            />
            ))}
        </Row>
    );
  }
}

export default PostIndex;
