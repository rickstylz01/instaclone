import React from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class Header extends React.Component {
  render() {
    return (
      <Navbar id="mainNavbar" bg="light" variant="light">

        <Navbar.Brand href="#home">Rickstagram</Navbar.Brand>

        <Form inline id="searchBar">
          <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2" />
          <Button 
            variant="outline-primary">
              Search
          </Button>
        </Form>

        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-house-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fillRule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </Nav.Link>
        </Nav>

      </Navbar>
    );
  }
}

export default Header;
