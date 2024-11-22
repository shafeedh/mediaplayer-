import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar className="bg-danger">
        <Container>
          <Navbar.Brand className=' fw-bold fs-5'>
          <Link id='link' to={'/'} className='text-white ' >
              <i className="fa-solid fa-play me-3"></i>
               Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header