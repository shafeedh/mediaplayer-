import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, deleteVideos, getAllCategory, getAllVideos, getSingleVideo, updateCategory } from '../service/allAPI';
import VidioCard from './VidioCard'



function Catogery({setDeleteVideoCategoryResponce,deleteVideoViewResponse}) {
  useEffect(() => {
    getCategory()
  }, [deleteVideoViewResponse])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState("");
  console.log(categoryName);

  const handleAddCategory = async () => {

    if (categoryName) {
      //  api Call
      try {
        await addCategory({ categoryName, getAllVideos: [] })
        setCategoryName("")
        handleClose()
        getCategory()
        toast.success(`category ${categoryName} added successfully`)

      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("please enter the category name")
    }


  }
  const [allCategory, setAllCategory] = useState([]);
  console.log(allCategory);


  const getCategory = async () => {
    try {
      const result = await getAllCategory()
      setAllCategory(result.data)
    }
    catch (err) {
      console.log(err);

    }
  }


  const delCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId)
      getCategory()
    }
    catch (err) {
      console.log(err);

    }
  }


  const videoDropped = async (e, categoryId) => {
    console.log(categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`dragged video id ${videoId} and dropped category id ${categoryId}`);
    // api call for get single video
    try {

      const { data } = await getSingleVideo(videoId)
      console.log(data);

      const selectedCategory = allCategory.find(item => item.id == categoryId)
      selectedCategory.getAllVideos.push(data)
      console.log(selectedCategory);

      // api call for update category

      await updateCategory(categoryId,selectedCategory)
      getCategory()

      const result=await deleteVideos(videoId)
      setDeleteVideoCategoryResponce(result.data)
      console.log(result.data)




    }
    catch (err) {
      console.log(err);

    }

  }
  const dragOverCategory = (e) => {
    e.preventDefault()
  }
  const dragStarted=(e,videoDetails,categoryId)=>{

    console.log(`draggig started${videoDetails}and ${categoryId}`);
    const dataShare={videoDetails,categoryId}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))

  }


  return (
    <>
      <div className="d-flex justify-content-around">
        <h4 className='text-info ms-5'>All Catogery</h4>
        <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle me-5 fw-borler'>+</button>
      </div>
      <div className='container-fluid mt-3'>
        {
          allCategory.length > 0 ?

            allCategory?.map(category => (

              <div droppable={true} onDragOver={(e) => dragOverCategory(e)} onDrop={(e) => videoDropped(e, category?.id)} className="border border-light border-3 rounded p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <h5>{category.categoryName}</h5>
                  <button onClick={() => delCategory(category.id)} className='btn '><i className="fa-solid fa-trash" style={{ color: 'red', fontSize: '20px' }}></i></button>

                </div>
                <div className='row mt-3'>
                  {
                    category.getAllVideos.length>0 &&
                    category.getAllVideos.map(video=>(
                      <div draggable={true} onDragStart={(e)=>dragStarted(e,video,category.id)} className="col-lg-6">

                   <VidioCard displayData={video} insideCategory={true}/>

                  </div>

                    ))
                  }
                  
                
                </div>
                  

              </div>


            ))

            :
            <div className='text-danger fw-bold fs-3'>Category not added yet</div>
        }
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3 border border-3 border-info rounded">
            <FloatingLabel controlId="categoryName" label="category">
              <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="category" />
            </FloatingLabel>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="info" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>


      {/*  */}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />


    </>
  )
}

export default Catogery