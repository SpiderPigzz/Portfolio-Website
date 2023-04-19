import { useState, useRef, useEffect } from "react";
import { TextField, IconButton, Grid, Box, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import { SteinIcon } from "utils/FileMapping";

import ChatBubble from "./ChatBubble/ChatBubble";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion } from "framer-motion";
import { useChatContext } from "context/ChatContext";
import useScreenSize from "hooks/useScreenSize";

const chatVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
const chatTransition = {
  duration: 0.25,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const ChatInterface = () => {
  const { isDesktopView } = useScreenSize();
  const containerVariants = {
    open: {
      height: "500px",
      width: isDesktopView ? "35vw" : "calc(100vw - 32px)",
    },
    closed: { height: "50px", width: "50px" },
  };

  const {
    chatIsOpen,
    setChatIsOpen,
    chatLog,
    setChatLog,
    handleSendMessage,
    message,
    setMessage,
  } = useChatContext();

  const toggleChat = () => {
    setChatIsOpen(!chatIsOpen);
  };

  // const setChat = (state) => {
  //   setChatIsOpen(state);
  // };

  // useEffect(() => {
  //   console.log(chatIsOpen);
  // }, [chatIsOpen]);

  const chatLogRef = useRef(null);

  useEffect(() => {
    if (chatIsOpen) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: isDesktopView ? "20px" : "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
        zIndex: "9999",
        background: "rgba(255, 255, 255, 0.25)",
        border: "none",
        borderRadius: "16px",
        padding: chatIsOpen ? "16px" : "2px",
        boxShadow: "0px 8px 32px 0px rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <motion.div
        variants={containerVariants}
        animate={chatIsOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {chatIsOpen && (
          <motion.div
            variants={chatVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-around",
              flexDirection: "column",
              gap: "8px",
            }}
            transition={chatTransition}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <IconButton
                onClick={toggleChat}
                sx={{ width: "50px", height: "50px" }}
              >
                <CloseRoundedIcon />
              </IconButton>
              <Box sx={{ display: "flex" }}>
                <Avatar sx={{ marginX: "4px" }} src={SteinIcon} />
                <Box>
                  <Box
                    sx={{ fontSize: "1rem", color: "white", fontWeight: "800" }}
                  >
                    {"Stein"}
                  </Box>
                  <Box sx={{ fontSize: "0.8rem", color: "white" }}>
                    {"Online and ready!"}
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                overflowY: "scroll",
                flexGrow: 1,
                maxHeight: "100%",
                width: "100%",
              }}
              ref={chatLogRef}
            >
              {chatLog.map((chat, index) => (
                <ChatBubble chat={chat} key={index} />
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                label="Type a message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleSendMessage(message, "chat");
                  }
                }}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderRadius: "16px",
                  padding: "8px",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              />
              <IconButton
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderRadius: "16px",
                  boxShadow: "0px 8px 32px 0px rgba(31, 38, 135, 0.37)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "none",
                  outline: "none",
                  // marginRight: "-12px",
                }}
                onClick={() => {
                  handleSendMessage(message, "chat");
                }}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </motion.div>
        )}
        {!chatIsOpen && (
          <IconButton sx={{ width: "100%" }} onClick={toggleChat}>
            <ChatIcon />
          </IconButton>
        )}
      </motion.div>
    </Box>
  );
};

export default ChatInterface;
