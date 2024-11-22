import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';






function Footer() {
  return (
    <>
    <Container>
      <Row>
        <Col sm={4}>
         <i className="fa-solid fa-play me-3"></i>Media Player
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio porro est magni, explicabo, ipsam eveniet eum mollitia nemo repellat nulla consequuntur laboriosam quod, laborum molestias dolorum vero ipsa ratione in.</p>
        
         <p>Code is licenced bu luminar</p>
        <p>Currently v5.3.2</p>
        </Col>
        <Col sm={2}>
        <div>
          <h5>Links</h5>
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing</Link></div>
          <div><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link></div>
          <div><Link to={'/history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link></div>
        </div>
        </Col>
        <Col sm={2}>
        <h5>Guides</h5>
        <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link></div>
        <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>React bootstrap</Link></div>
        <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Watch router</Link></div>
        </Col>
        <Col sm={4}>
        <h5>Contact Us</h5>
        <div className='d-flex justify-content-between' >
          <input type="text"className='form-control' placeholder='enter email' />
          <button className='btn btn-info ms-3'> <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='d-flex justify-content-between mt-5'>
          <a href="" style={{fontSize:'20',color:'white'}}><i className="fa-brands fa-facebook"></i></a>
            <a href="" style={{fontSize:'20',color:'white'}}><i className="fa-brands fa-twitter"></i></a>
            <a href="" style={{fontSize:'20',color:'white'}}><i className="fa-brands fa-instagram"></i></a>
            <a href="" style={{fontSize:'20',color:'white'}}><i className="fa-brands fa-linkedin"></i></a>
            <a href="" style={{fontSize:'20',color:'white'}}><i className="fa-brands fa-github"></i></a>
            </div>
      
        </Col>
      </Row>
     
    </Container>
  
    </>
  )
}

export default Footer