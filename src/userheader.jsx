import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiAbstract097 } from "react-icons/gi";
import Loginmodal from './loginmodal';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function UserHeader() {
    const nav=useNavigate()
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"><GiAbstract097 /> EmShoppi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/userhome">Home</Nav.Link>
            <Nav.Link href="/userhome/cart">Cart</Nav.Link>
           
           
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Product Purchased</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      <Button variant='outlined' onClick={()=>{
                alert("Logout")
                 nav("/")  
            }}> Logout </Button>
    </Navbar>
    
  );
}

export default UserHeader;