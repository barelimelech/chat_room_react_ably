import React, { useEffect, useState, ChangeEvent } from "react";
import { useChannel } from "ably/react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Message } from "ably";

interface ChatRoomProperties {
  username: string;
}

const ChatRoom = ({ username }: ChatRoomProperties) => {
  const [messages, updateMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      channel.publish({ name: "message", data: { username, message } });

      setMessage("");
    }
  };

  //   useEffect(() => {
  //     const publishMessage = async () => {
  //       console.log("chat room");

  //       if (channel) {
  //         await channel.publish("my_channel", "hello!");
  //       } else {
  //         console.error("Channel is undefined");
  //       }
  //     };
  //     publishMessage();
  //   }, [channel]);

  const { channel } = useChannel("my_channel", (message: Message) => {
    message.clientId = username;
    updateMessages((prevMessages) => [...prevMessages, message]);
  });

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        marginTop: 4,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 4,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Chat Room
      </Typography>
      <Box sx={{ maxHeight: 400, overflowY: "auto", marginBottom: 2 }}>
        {messages.map((msg, index) => (
          <Typography
            key={index}
            variant="body1"
            gutterBottom
            sx={{
              textAlign: msg.data.username !== username ? "right" : "left",
              marginRight: msg.data.username !== username ? 0 : "auto",
              marginLeft: msg.data.username === username ? 0 : "auto",
            }}
          >
            {msg.data.username}: {msg.data.message}
          </Typography>
        ))}
      </Box>
      <TextField
        fullWidth
        label="Type a message"
        variant="outlined"
        value={message}
        onChange={handleMessageChange}
        sx={{ marginBottom: 1 }}
      />
      <Button variant="contained" onClick={handleSendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default ChatRoom;
