import React, { useState } from "react";
import ChatRoom from "./ChatRoom";
import { ChannelProvider, useConnectionStateListener } from "ably/react";
import { TextField, Button, Box, Typography } from "@mui/material";

interface User{
    username:string;
}
const UserDetails = () => {
  const [username, setUsername] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitClicked(true);
  };

  return (
    <>
      {!submitClicked && (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 400,
            margin: "auto",
            marginTop: 4,
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Enter Your Username
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleChange}
            sx={{ marginBottom: 1, width: "100%" }}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      )}
      {submitClicked && (
        <ChannelProvider channelName="my_channel">
          <ChatRoom username={username} />
        </ChannelProvider>
      )}
    </>
  );};

export default UserDetails;
