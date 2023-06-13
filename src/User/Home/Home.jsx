import React from "react";
import { baseUrl } from "../../Globals/Config";
import axios from "axios";
const Home = () => {
  const [blog, setBlog] = React.useState([]);
  const getBlog = async () => {
    let res = await axios.get(`${baseUrl}blog_project`);
    console.log(res);
  };

  React.useEffect(()=>{
    getBlog();
  },[]);
  return <div>This is user Home</div>;
};

export default Home;
