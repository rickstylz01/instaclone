import React from 'react';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar/MainNavbar';

// import PostIndex from './components/PostIndex/PostIndex';

import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div>
      <MainNavbar />
      <Container>
        <SearchBar />
        {/* <PostIndex /> */}
      </Container> 
    </div>
  );
}

export default App;
