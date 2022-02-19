
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Dropdown, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="container-fluid shadow shadow-b-lg">
      <Navbar expand="lg" className="fw-bold">
        <Container fluid>
          <Navbar.Brand href="#"><img className='w-25' src="https://i.ibb.co/LQx21FN/PH.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact-us">Contuct Us</Nav.Link>
            </Nav>


            {
              user?.email
                ?
                <Dropdown style={{ "outline": "none" }} className="me-5">
                  <Dropdown.Toggle variant="none" id="dropdown-basic" className="outline-none">
                    <img src={user?.photoURL} alt="" className="img-fluid rounded-circle me-2" style={{ "width": "35px" }} />{user?.displayName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/my-orders">My Orders</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/manage-orders">Manage All Orders</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/add-new-services">Add New Place</Dropdown.Item>
                    <Dropdown.Item as={Button} onClick={logOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                :
                <Nav.Link as={Link} to="/login" className="me-2 ">
                  <span><span className="btn__login">Log In </span><i className="fas fa-sign-in-alt"> </i></span>
                </Nav.Link>
            }


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;