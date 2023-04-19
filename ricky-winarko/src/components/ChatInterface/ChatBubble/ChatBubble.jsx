import { TextField, IconButton, Grid, Box, Avatar } from "@mui/material";
import MarkdownProcessor from "components/MarkdownProcessor/MarkdownProcessor";
const ChatBubble = ({ chat }) => {
  return (
    <Box
      sx={{
        marginTop: "2px",
        marginBotton: "2px",
        width: "fit-content",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: "16px",
        padding: "8px",
        boxShadow: "0px 8px 32px 0px rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "none",
        marginRight: chat.user === "Me" ? "0" : "auto",
        marginLeft: chat.user === "Me" ? "auto" : "0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: chat.user === "Me" ? "row" : "row-reverse",
        }}
      >
        <Box
          sx={{
            overflowWrap: "break-word",
            overflow: "auto",
            marginX: "4px",
          }}
        >
          <MarkdownProcessor markdownText={chat.message} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // alignItems: chat.user === "Me" ? "flex-end" : "flex-start",
          }}
        >
          <Avatar sx={{ marginX: "4px" }} src={chat.avatar} />
          <Box sx={{ fontSize: "12px", color: "white" }}>{chat.user}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBubble;
