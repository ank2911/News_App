import {Link, useNavigate} from 'react-router-dom';
import React, { useContext } from 'react';
import { Navbar,Container,Form,Button} from "react-bootstrap";
import { AuthContext } from '../context/AuthContext';
import  '../styles/App_Header.css'

function App_Header() {

  const date  = new Date();
  const currentDate = date.toLocaleDateString();

  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="p-2">
        <Container>
          <Navbar.Brand className="fw-bold fs-4">
            DailyNews
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li> */}
              
              <li className="nav-item">
                <Link className="nav-link" to="/help">Help?</Link>
              </li>
             {
              auth.isAuthenticated && (
                <div className='navbar-link'>
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/subscribe">Subscription</Link>
              </li>
            </ul>
              <Form className="d-flex">
            <Form.Control
              style={{width:'55vh'}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            </div>
              )
             }
            </ul>
          </Navbar.Collapse>
          
          

          {/* register, login, logout section in navbar */}
          
          {auth.isAuthenticated ? (
            <>
              <span className="nav-item welcome-text">Welcome, {auth.user?.name}</span>
              <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
            </>
            
          ) : (
            <>
              <span className="login-item ">
                  <Link className="nav-link" to="/login">Login</Link>
              </span>

              <span className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
              </span>
            </>
          )}

        </Container>
      </Navbar>

    </>
  )
}

export default App_Header