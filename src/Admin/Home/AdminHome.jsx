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
import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [blog, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isDeleting,setIsDeleting] = React.useState(true)
  const [id, setId] = React.useState(null);

  const navigate = useNavigate();
  const getBlog = async () => {
    let res = await axios.get(`${baseUrl}blog_project`);
    setBlog(res.data);
    setLoading(false);
  };
   const deleteBlog = async(id) =>  {
    setId(id);
    setIsDeleting(true);
    await axios.delete(`${baseUrl}blog_project/${id}`);
    getBlog()
    setIsDeleting(false)
   }
  React.useEffect(() => {
    getBlog();
  }, []);

  return (
    <Box sx={{ width: "90%", margin: "0 auto" }}>
      <Typography variant="h3" sx={{ my: 3, textAlign: "Center" }}>
        Blog
      </Typography>
      {/* {loading ? "loading...." : 'gjhgjhgf'} */}
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {blog.map((blog) => {
            return (
              <Card
                key={blog.id}
                sx={{ maxWidth: 345, border: "1px solid black" }}
              >
                <CardMedia
                  sx={{ height: 140, width: 345 }}
                  image={blog.Image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#aaa", fontSize: "16px" }}
                  >
                    {blog.Author}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.Description.slice(0, 100)}
                  </Typography>
                </CardContent>
                <CardActions>


                  <Button onClick={()=>navigate(`/blog/${blog.id}`)}
                  size="small">Edit</Button>
                <Button color="warning" size='small' onClick={()=> deleteBlog(blog.id)}>
                  {id == blog.id && isDeleting ? "Deleting..." : "Delete"}</Button>

                </CardActions>
              </Card>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
