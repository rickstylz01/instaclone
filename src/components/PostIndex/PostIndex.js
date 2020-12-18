import React from "react";
import postsData from "./postsData.json";
import PostCard from '../PostCard/PostCard';
import Row from 'react-bootstrap/Row';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData() {
    // axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
    //   var data = res.data
    //     this.setState({data : data})
    // })
    this.setState({ data: postsData });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Row className="mt-3 justify-content-center">
        {this.state.data.map(post => (
          <PostCard 
            imageUrl={post.image_url}
            userName={post.username}
            caption={post.caption}
            timeStamp={post.created_at}

          />
          ))}
      </Row>
    );
  }
}

export default PostIndex;
