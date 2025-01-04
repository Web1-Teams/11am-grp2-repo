import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const newUser = { email, password };

    localStorage.setItem("user", JSON.stringify(newUser));

    setSuccess("Account created successfully! You can now log in.");
    setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
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
          Signup
        </Typography>
        <form onSubmit={handleSignup} style={{ width: "100%" }}>
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
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && (
            <Alert severity="error" sx={{ marginY: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ marginY: 2 }}>
              {success}
            </Alert>
          )}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;