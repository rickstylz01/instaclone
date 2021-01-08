import React from 'react';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar/MainNavbar';
import PostIndex from './components/PostIndex/PostIndex';
import postsData from './components/PostIndex/postsData.json';

function App() {
  const data = postsData;

  return (
    <div>
      <MainNavbar 
      data={data} />
      <Container>
      <PostIndex data={data}/>
      </Container> 
    </div>
  );
}

export default App;
