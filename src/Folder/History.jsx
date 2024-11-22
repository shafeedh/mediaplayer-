import React, { useEffect, useState } from 'react'
import { deleteHistory, getAllhistory } from '../service/allAPI'


function History() {

  const[vidioHistory,setVidioHistory]=useState([])
  console.log(vidioHistory);
  
  useEffect(()=>{
    getHistory()
  },[])

  const getHistory=async()=>{
    try{
      const result=await getAllhistory()
      // console.log(result);
      
      
      setVidioHistory(result.data)
      

    }
    catch(err){
      console.log(err);
      
    }
  }
  const delHistory=async(videoId)=>{
    try{
      await deleteHistory(videoId)
      getHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
   <>
   <div>
      <h5 className='text-warning'> Watch Histroy</h5>
      <div className=''>
    <table className='table mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>date</th>
          <th> </th>
        </tr>
      </thead>
      
        <tbody>
          {
            vidioHistory.length>0?
            vidioHistory?.map((item,index)=>(
              <tr key={item?.id}>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href="" target='_blank'>{item?.youtubeUrl}</a></td>
              <td>{item?.formatedDate }</td>
              <td onClick={()=>delHistory(item?.id)} className='text-warning'><i class="fa-solid fa-trash text-danger"></i></td>
            </tr>
            ))
         
          :
          <div className='text-danger fw-bold fs-3'>Nothing to display</div>
            
          }
        </tbody>
      
      
    </table>
        
      </div>

      </div>
   
   </>
  )
}

export default History