import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const SkeuCard = ({ title, subtitle, imageSrc, imageAlt, children }) => {
  return (
    <Card
      sx={{
        borderRadius: "4px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#F5F5F5",
        color: "#333",
        fontWeight: "bold",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "#E0E0E0",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
          transform: "translate(0px, -1px)",
        },
        "&:active": {
          boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.3)",
          transform: "translate(0px, 1px)",
        },
      }}
    >
      <CardMedia component="img" height="140" image={imageSrc} alt={imageAlt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};
export default SkeuCard;
