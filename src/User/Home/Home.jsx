import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { baseUrl } from "../../Globals/Config";
import { Margin } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Home() {
  // blog = [{},{},{},{},{}]
  const [blog, setBlog] = React.useState([]);

  const getBlog = async () => {
    let res = await axios.get(`${baseUrl}blog_project`);
    setBlog(res.data);
  };

  React.useEffect(() => {
    getBlog();
  }, []);
  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Typography variant="h3" sx={{ my: 3, textAlign: "Center" }}>
        Blog
      </Typography>
      <Box sx={{ display: "flex",flexWrap:"wrap",gap:3 }}>
        {blog.map((blog)=>{
          return(
            <Card key={blog.id} sx={{ maxWidth: 345, border: "1px solid black" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={blog.Image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blog.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {blog.Description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
          )
        })}
        
      </Box>
    </Box>
  );
}
