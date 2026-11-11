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
            href="/"
            className="text-white">
                Scarlet Rose
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="https://www.instagram.com/scarlet.quasar/" target="_blank" rel="noreferrer" className="text-white">Instagram</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { LayoutNavbar }