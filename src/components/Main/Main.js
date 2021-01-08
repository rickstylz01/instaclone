import React from 'react';
import {Container} from 'react-bootstrap';
import MainNavbar from "../MainNavbar/MainNavbar";
import PostIndex from "../PostIndex/PostIndex";
import postsData from "../PostIndex/postsData.json";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: postsData,
    }
  }

  render() {
    return (
      <div>

        <MainNavbar data={this.state.data}/>
        <Container>
          <div><p>Hello!</p></div>
          <PostIndex data={this.state.data}/>
        </Container>
      </div>
    )
  }
}

export default Main;