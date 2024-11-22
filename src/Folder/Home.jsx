import React, { useEffect, useState } from 'react'
import Addv from '../Components/Addv'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Catogery from '../Components/Catogery'




function Home() {
  const [addVideoResponse,setAddVideoResponce]=useState("")
  const [deleteVideoCategoryResponce,setDeleteVideoCategoryResponce]=useState("")
  const [deleteVideoViewResponse,setDeleteVideoViewResponse]=useState("")
  
  return (
    <>
     <div className="container m-5 d-flex justify-content-between">
      <Addv setAddVideoResponce={setAddVideoResponce}/>
      <Link to={'/history'} className='text-warning fw-bold fs-5'  style={{textDecoration:'none'}}> watch History </Link>
      
    </div>
    <div className='row m-5'>
      <div className='col-lg-6'>
        <h2 className=''>All Videos</h2>
        <View addVideoResponse={addVideoResponse} deleteVideoCategoryResponce={deleteVideoCategoryResponce} setDeleteVideoViewResponse={setDeleteVideoViewResponse} />
      </div>
      <div className='col-lg-6'>
        <Catogery setDeleteVideoCategoryResponce={setDeleteVideoCategoryResponce} deleteVideoViewResponse={deleteVideoViewResponse} />

      </div>
    </div>
    
    
    </>
    
  )
}

export default Home