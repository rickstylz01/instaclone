import React from 'react';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar/MainNavbar';
import PostIndex from './components/PostIndex/PostIndex';

function App() {
  return (
    <div>
      <MainNavbar />
      <Container>
        <PostIndex />
      </Container> 
    </div>
  );
}

export default App;
