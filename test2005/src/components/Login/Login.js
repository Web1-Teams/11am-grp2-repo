import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      navigate("/home");
    } else {
      setError("Invalid login credentials. Please try again.");
    }
  };

  return (
    <Container
      maxWidth={false}
      disableGutters 
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "url('https://i.pinimg.com/736x/23/36/b0/2336b0e443052707b2df5ae375c84302.jpg') no-repeat center center", 
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255, 0.8)", 
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Alert severity="error" sx={{ marginY: 2 }}>
              {error}
            </Alert>
          )}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2">
            Don't have an account? <a href="/signup">Sign up</a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;