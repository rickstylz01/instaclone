import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

class Header extends React.Component {
  render() {
    return (
      <Nav className="justify-content-end" activeKey="/home">
        <h2 id="navTitle">Rickstagram</h2>
        <Button variant="outline-primary">Primary</Button>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
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
    );
  }
}

export default Header;
