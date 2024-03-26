import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { theme } from '../layout/theme';

function LayoutNavbar() {
  return (
    <Navbar 
        expand="lg" 
        style={{
            background: theme.primary,
            boxShadow: '0px 0.1em'
        }}>
      <Container>
        <Navbar.Brand 
            href="#home"
            className="text-white">
                Scarlet Codes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#link" className="text-white">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { LayoutNavbar }