import React from "react";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Header extends React.Component {
  render() {
    //inputgroup = navbar
    return (
      <div>
        <Nav className="justify-content-end" activeKey="/home">
          <h2 id="navTitle">Rickstagram</h2>
          
          <div id="searchBar">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Search
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </div>
          
          <Nav.Item>
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              class="bi bi-house-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Header;
