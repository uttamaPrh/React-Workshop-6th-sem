import { Box, Button, Input, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let formData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    let res = await axios.post("https://reqres.in/api/login", formData);
    console.log(res);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      navigate("/admin/home");
    }
  };
  return (
    <div style={{paddingTop:'150px'}}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "50%",
          margin: "0 auto",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          p:3
        }}
      >
        <Typography align="center">Login</Typography>
        <Box sx={{ display: "grid", gap:3 }}>
          <Input type="email" placeholder="email" name="email" />
          <Input type="password" placeholder="password" name="password" />
          <Button type="submit">Login</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;