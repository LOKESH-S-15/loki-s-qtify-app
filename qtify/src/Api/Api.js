import axios from "axios";

const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do";

export const performSearchTopAlbums=async ()=>{
    try{
      const data=await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
      return data.data;
    }
    catch(error){
      if (error.response.status===429){
        return error.response.statusText

      }
      console.error("Error", error.message)
    }
   };
 export   const performSearchNewAlbums=async ()=>{
    try{
      const data=await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
      return data.data;
    }
    catch(error){
      if (error.response.status===429){
        return error.response.statusText

      }
      console.error("Error", error.message)
    }
   };   
   

   export   const performSearchSongs=async ()=>{
    let url=`${BACKEND_ENDPOINT}/songs`

    try{
      const data=await axios.get(url);
      return data.data;
    }
    catch(error){
      if (error.response.status===429){
        return error.response.statusText

      }
      console.error("Error", error.message)
    }
   };  

   export   const performSearchGenre=async ()=>{
    try{
      const data=await axios.get(`${BACKEND_ENDPOINT}/genres`);
      
      return data.data.data;
    }
    catch(error){
      if (error.response.status===429){
        return error.response.statusText

      }
      console.error("Error", error.message);
    }
   };  