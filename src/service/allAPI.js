import commonApi from "./commonApi";
import SERVER_URL from "./server_url";


// save vidio
// save vidio api call by add.jsx

export const addVidios=async(video)=>{
  return await  commonApi("POST",`${SERVER_URL}/allVidios`,video)
}

// fetch video api call

export const getAllVideos=async()=>{
  return await commonApi("GET",`${SERVER_URL}/allVidios`,"")
}
// api call for delete videos
export const deleteVideos=async(videoid)=>{                                   
  return await commonApi("DELETE",` ${SERVER_URL}/allVidios/${videoid}`,"")
}
// api call for save history
export const saveHistory=async(video)=>{
  return await commonApi("POST",`${SERVER_URL}/history`,video)
}
// api call for get history
export const getAllhistory=async()=>{
  return await commonApi("GET",`${SERVER_URL}/history`,"")
}
// api call for delete hestory
export const deleteHistory=async(videoId)=>{
  return await commonApi("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}
//api call for add catogery
export const addCategory=async(categoryDetails)=>{
  return await commonApi("POST",`${SERVER_URL}/allCatogary`,categoryDetails)
} 
// api call for get category
export const getAllCategory=async()=>{
  return await commonApi("GET",`${SERVER_URL}/allCatogary`,"")
}
// api call for delete category
export const deleteCategory=async(categoryId)=>{
  return await commonApi("DELETE",`${SERVER_URL}/allCatogary/${categoryId}`,{})
}
// api call for get a single vidio
export const getSingleVideo=async(videoId)=>{
  return await commonApi("GET",`${SERVER_URL}/allVidios/${videoId}`,"")
}
// api call for updating category
export const updateCategory=async(categoryId,categoryDetails)=>{
  return await commonApi("PUT",`${SERVER_URL}/allCatogary/${categoryId}`,categoryDetails)
}

// 
export const getSingleCategory=async(categoryId)=>{
  return await commonApi("GET",`${SERVER_URL}/allCatogary/${categoryId}`,"")
}