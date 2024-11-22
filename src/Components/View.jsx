import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VidioCard from './VidioCard'
import { addVidios, getAllVideos, getSingleCategory, updateCategory } from '../service/allAPI'
import { json } from 'react-router-dom'





function View({addVideoResponse,deleteVideoCategoryResponce,setDeleteVideoViewResponse}) {
  const [allVidios, setAllVidios] = useState([])
  const[deleteRespponse,setdeleteRespponse]=useState("")

  useEffect(() => {

    getVidios()

  },[addVideoResponse,deleteRespponse,deleteVideoCategoryResponce])
  

  const getVidios = async () => {
    try {
      const result = await getAllVideos()
      console.log(result.data);
      setAllVidios(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }
  const dragOverView=(e)=>{
    e.preventDefault()
  }
  const dropCategoryVideo=async(e)=>{
  const {videoDetails,categoryId}=JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(`${videoDetails}and${categoryId}`);

    try{
      const {data}=await getSingleCategory(categoryId)
      console.log(data);
     const updatedCategoryVideoList= data.getAllVideos.filter(item=>item.id!=videoDetails.id)
     console.log(updatedCategoryVideoList);
      
    //  api call for update category
     const {id,categoryName}=data
     const categoryResult=await updateCategory(id,{id,categoryName,getAllVideos:updatedCategoryVideoList})
      setDeleteVideoViewResponse(categoryResult.data)

     await addVidios(videoDetails)
     getVidios()
      
    }
    catch(err){
      console.log(err);
      
    }

    
  }

  return (
    <>
      {
        allVidios.length > 0 ?
          <Row droppable={true} onDrop={(e)=>dropCategoryVideo(e)} onDragOver={(e)=>dragOverView(e)}  className='border border-3'>
            {
              allVidios?.map(video => (
                <Col key={video?.id} lg={4} md={6} sm={12}>
                  
                  <VidioCard displayData={video}
                  setdeleteRespponse={setdeleteRespponse}/>
                </Col>
              ))
            }
          </Row>
          :
          <div className='text-danger fs-3 fw-bold'>Nothing To Display</div>
      }


    </>
  )
}

export default View