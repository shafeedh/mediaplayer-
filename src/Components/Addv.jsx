import React from 'react'
import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVidios } from '../service/allAPI';


function Addv(setAddVideoResponce) {

        const[videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})
        console.log(videoDetails);

        const[invalidUrl,setInvalidUrl]=useState(false)
        

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedUrl=(link)=>{
      
     if(link.includes("v=")){
        
     let videoId=link.split('v=')[1].slice(0,11)
            setVideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
            setInvalidUrl(false)
            
     }
    else{
      setVideoDetails({...videoDetails,youtubeUrl:''})
      setInvalidUrl(true)
    }
  }

   const handleUpload=async()=>{
    const{caption,imageUrl,youtubeUrl}=videoDetails

    if(caption && imageUrl && youtubeUrl){
       
         try{
          const result= await addVidios(videoDetails)
          setAddVideoResponce(result.data)
          console.log(result);
          if(result.status>=200 && result.status<300){
            setVideoDetails("")
            toast.success(`${result.data.caption} added to your collection`)
            handleClose()

          }
          
         }
         catch(err){
          console.log(err);
          
         }
        
      
    }
    else{
      // alert("please enter the field")
      toast.warning("please enter the field completely")
    }
   }



  return (
    <>
   <div className='d-flex align-item-center'>
      <h4 className='text-warning'>Upload video</h4>
      <button  onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-border'>+</button>
    </div>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill following details</p>
         <div className='border border-4 border-info rounded p-3'>
 {/* caption */}

            <FloatingLabel
        controlId="floatingInputCaption"
        label="Video caption"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Enter Video Caption" />
      </FloatingLabel> 
{/* image url */}
<FloatingLabel
        controlId="floatingInputImage"
        label="Image url"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Image url" />
      </FloatingLabel> 


       {/*youtube url */}

      <FloatingLabel
        controlId="floatingInputYoutube"
        label="yutube url"
        className="mb-3"
      >
        <Form.Control onChange={e=>getEmbedUrl(e.target.value)}  type="text" placeholder="Youtube URL" />
      </FloatingLabel> 
        {
          invalidUrl && <div className="text-danger fw-bold">Invalid Url</div>

        }      

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload} >Upload</Button>
        </Modal.Footer>
      
      </Modal>
    
    {/*  */}
    <div>
      <ToastContainer position="top-right" autoClose={3000} theme="colored"/>
      </div>
   
    </>
  )
}

export default Addv