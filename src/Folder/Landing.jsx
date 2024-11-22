import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/lm.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import settings from '../assets/settings-removebg-preview.png'
import file from '../assets/file.png'
import history from '../assets/history (2).png'

function Landing() {
  return (
    <>
    <div className='container landingsection'>
      <div className='row align-items-center my-5'>
        <div className='col-lg-5'>
          <h4>Welcome to <span className='text-warning'>Media player</span></h4>
          <p style={{textAlign:'justify'}}className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur necessitatibus voluptatum totam libero vitae eum voluptatem nemo in rerum incidunt nesciunt, quae delectus accusantium facilis excepturi similique, animi corrupti?</p>
          <Link to={'/home'} className='btn btn-info mt-4'>Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img src={landingImage} alt="" />
        </div>
      </div>
    </div>
    {/* {features} */}
<div className='d-flex'>
  {/* card 1 */}
      <div className="feature container my-5">
        <h1 className='text-center text-warning'>Features</h1>
        <div className="row">
          <div className="col-lg-4">
          <Card style={{ width: '20rem', height:'450px'}}>
        <Card.Img variant="top" src={settings} />
        <Card.Body>
          <Card.Title>Managing vidios</Card.Title>
          <Card.Text>
           users can upload,view remove the videos
          </Card.Text>
         
        </Card.Body>
      </Card>
  
          </div>
          {/* card 2 */}
          <div className="col-lg-4">
          <Card style={{ width: '20rem',height:'450px' }}>
        <Card.Img style={{height:'250px',marginTop:'35px'}} variant="top" src={file} />
        <Card.Body>
          <Card.Title style={{marginTop:'28px'}}>Categorize Video Videos</Card.Title>
          <Card.Text>
           users can Categorize the video by drag and drop features
          </Card.Text>
         
        </Card.Body>
      </Card>
  
          </div>
          {/* card 3 */}
          <div className="col-lg-4">
          <Card style={{ width: '20rem' ,height:'450px'}}>
        <Card.Img style={{width:'250px',marginTop:'45px',marginLeft:'35px'}} variant="top" src={history} />
        <Card.Body>
          <Card.Title style={{marginTop:'35px'}}>Managing History</Card.Title>
          <Card.Text>
           users can manage the watch history
          </Card.Text>
         
        </Card.Body>
      </Card>
  
          </div>
        </div>
      </div>
      </div>

      {/*div  */}
      <div className='border border-5 m-5'>
  <h1 className='text-warning'>Simple,Fast and Powerful</h1>

  <div className='row'>
    <div className='col-lg-7'>
     <h4>Play Every Thing : <span className='fs-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cum id. Ea ad dicta ipsum! Ratione soluta neque quos. Ut assumenda porro at animi natus iure aliquid atque ad officiis.</span></h4>
     <h4>Manage Videos: <span className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cum id. Ea ad dicta ipsum! Ratione soluta neque quos. Ut assumenda porro at animi natus iure aliquid atque ad officiis.</span></h4>
     <h4>Watch History : <span className='fs-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cum id. Ea ad dicta ipsum! Ratione soluta neque quos. Ut assumenda porro at animi natus iure aliquid atque ad officiis.</span></h4>

    </div>
 
    
    <div className='col-lg-4'>
   
    <iframe width="460" height="315" src="https://www.youtube.com/embed/PARfU2Vi694?si=SSHlL3_Sn-QEWz-1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; " referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     {/* <iframe width="460"height="315" src="https://youtu.be/PARfU2Vi694?si=SSHlL3_Sn-QEWz-1" title='youtube video player' frameborder="0" allow='autoplay'></iframe> */}
     
    </div>
    </div>
  
  </div>
    

  </>
  )
}

export default Landing