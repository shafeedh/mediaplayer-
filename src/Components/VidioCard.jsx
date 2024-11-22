import React from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideos, saveHistory } from '../service/allAPI';




function VidioCard({displayData,setdeleteRespponse,insideCategory}) {
  
  
         
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{
        const {caption,youtubeUrl}=displayData
        const localTime=new Date()
        console.log(localTime);
        const formatedDate=localTime.toLocaleString()
        const vidioHistory={caption,youtubeUrl,formatedDate}
        try{
          await saveHistory(vidioHistory)
          console.log(vidioHistory);
          
          

        }
        catch(err){
          console.log(err);
          
        }
        
        setShow(true);

  } 
  const handleRemoveVideo=async(videoId)=>{
    try{
      const result= await deleteVideos(videoId)
      console.log(result);
      setdeleteRespponse(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }
    
  }

  const dragStarted=(e,videoId)=>{
    console.log(videoId);
    e.dataTransfer.setData("videoId",videoId)
    
  }


  return (
    <>
    
          <Card draggable={true} onDragStart={(e)=>dragStarted(e,displayData?.id)} className='mt-2'>
        <Card.Img onClick={handleShow} style={{height:'250px',marginTop:'35px'}} variant="top" src={displayData?.imageUrl} />
        <Card.Body className='d-flex align-items-center justify-content-between'>
          <h5>{displayData?.caption} </h5>
          {
            !insideCategory &&
            <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash" style={{color:'red',fontSize:'20px'}}></i></button>
          }
         
         
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Avesham</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="514" src={`${displayData?.youtubeUrl}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
  
          
    </>
  )
}

export default VidioCard