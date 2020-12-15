import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar/MainNavbar';
import PostCard from './components/PostCard/PostCard';

function App() {
  return (
    <div>
      <MainNavbar />
      <Container>
        <CardDeck className="mt-3">
          <PostCard />
          <PostCard />
          <PostCard />
        </CardDeck>
      </Container> 
    </div>
  );
}

export default App;
