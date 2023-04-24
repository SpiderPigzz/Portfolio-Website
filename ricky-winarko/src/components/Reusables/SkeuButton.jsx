import { Button, Typography } from "@mui/material";
import { Noise } from "utils/FileMapping";

const SkeuButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: "4px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        backgroundImage: `url(${Noise})`,
        backgroundColor: "rgb(252, 163, 159)",
        color: "#333",
        fontWeight: "bold",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "#E0E0E0",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
          transform: "translate(0px, -2px)",
        },
        "&:active": {
          boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.3)",
          transform: "translate(0px, 3px)",
        },
      }}
    >
      <Typography variant="h3">{children}</Typography>
    </Button>
  );
};

export default SkeuButton;
