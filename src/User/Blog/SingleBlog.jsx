import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../Globals/Config';
import { Box, Divider, Typography } from '@mui/material';

const SingleBlog = () => {
        const{id}=useParams();
        const[SingleBlog,setSingleBlog]=React.useState({});
        const getSingleBlog=async()=>{
            let res =await axios.get(`${baseUrl}/blog_project/${id}`);
            setSingleBlog(res.data)
        };
        React.useEffect(() =>{
            getSingleBlog();
        },[]);
  return (
   <div>
<Box sx={{width:'90%', margin:'0 auto'}}>
    <Typography sx={{ fontSize:"209px",fontWeight:'800', textAlign:'center'}}>{SingleBlog.Title}</Typography>
    <img src={SingleBlog.Image} style={{height:"400px",width:'100%', objectFit:'contain'}}/>
    <Typography sx={{pb:2}}>{SingleBlog.Author}</Typography>
    <Divider/>
    <Typography sx={{pt:3}}>{SingleBlog.Description}</Typography>
</Box>

   </div>
  )
}

export default SingleBlog