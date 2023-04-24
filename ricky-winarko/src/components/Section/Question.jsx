import * as React from "react";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { API } from "../../utils/Constants";
import "../../utils/Gradient.css";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import { ContactBackground } from "utils/FileMapping";

export default function Question() {
  const { enqueueSnackbar } = useSnackbar();
  const defaultdata = { name: "", subject: "", email: "", message: "" };
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/ezforms/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          formName: "Landing Question",
          formData: formData,
        }),
      });

      let resJson = await response.json();
      console.log(resJson);
      if (response.status === 200) {
        console.log("success");
        enqueueSnackbar("Message sent!", { variant: "success" });
        setFormData(defaultdata);
      } else {
        enqueueSnackbar("Message was not sent!", { variant: "error" });
        console.log("failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          mt: "3%",
          p: "2%",
          justifyContent: "center",
          display: "flex",
          minHeight: "45vh",
          backgroundImage: `url(${ContactBackground})`,
          backgroundSize: "cover",
          // background:
          //   "linear-gradient(248deg, #ba3bff 0%, #ef6d21 35%, #430043 100%)",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
          borderRadius: "1em;",
        }}
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            px: "5%",
            py: "3%",
            display: "block",
          }}
        >
          <Typography variant="h3" fontWeight={600}>
            <span className="orange">Let's Keep In Touch</span>
          </Typography>
          <Typography variant="h4" fontWeight={500}>
            <span className="">Drop us your question if you have any!</span>
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ mt: "2%" }}>
              <Grid container item xs={12}>
                <TextField
                  fullWidth
                  id="content"
                  type="text"
                  label="Questions"
                  multiline
                  // defaultValue={formData.question}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  color="secondary"
                  variant="outlined"
                  size="large"
                  rows={1}
                  required
                />
              </Grid>
              <Grid container item xs={12}>
                <TextField
                  fullWidth
                  id="subject"
                  type="text"
                  label="Subject"
                  multiline
                  // defaultValue={formData.question}
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  color="secondary"
                  variant="outlined"
                  size="large"
                  rows={1}
                  required
                />
              </Grid>
              <Grid container item xs={5}>
                <TextField
                  type="text"
                  label="Name"
                  id="Name"
                  multiline
                  // defaultValue={formData.name}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  color="secondary"
                  fullWidth
                  variant="outlined"
                  rows={1}
                  required
                />
              </Grid>
              <Grid container item xs={5}>
                <TextField
                  type="text"
                  label="Email"
                  id="Email"
                  multiline
                  // defaultValue={formData.email}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  color="secondary"
                  fullWidth
                  variant="outlined"
                  rows={1}
                  required
                />
              </Grid>
              <Grid container item xs={2}>
                <Button type="submit" fullWidth variant="contained">
                  submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Typography variant="h5" fontWeight={500}>
          Or, you can email us at:{" "}
          <Link underline="hover" href="mailto: learnr.lighthouse@gmail.com">
            <span className="orange">learnr.lighthouse@gmail.com</span>
          </Link>
        </Typography>
      </Grid>
    </div>
  );
}
