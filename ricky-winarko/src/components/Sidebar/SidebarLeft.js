import * as React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import LeftDrawer from "components/Reusables/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { LearnrAppIcon } from "utils/FileMapping";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function SidebarLeft({ drawerWidth, children, Menu, setMenu }) {
  function LearnrIcon() {
    return (
      <img
        src={LearnrAppIcon}
        alt="logo"
        style={{ width: "64px", height: "64px" }}
      />
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      ></AppBar>
      <LeftDrawer
        sx={{
          width: drawerWidth,
          minHeight: "100vh",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Button href="/">
            <LearnrIcon size={54} />
          </Button>
        </Toolbar>
        <Divider />
        <List>
          {Menu.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                value={text}
                onClick={() => {
                  setMenu(text);
                }}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </LeftDrawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          maxHeight: "100vh",
          overflowY: "scroll",
          maxWidth: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
