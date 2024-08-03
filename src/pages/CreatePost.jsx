import { useState } from "react";

import { Typography, Modal, Box, TextField, Button } from "@mui/material";
import { Form, Link, redirect } from "react-router-dom";

const CreatePost = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "rgba(245, 232, 199, 0.7)",
    p: 4,
  };
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form method="post">
            <Box>
              <Typography
                variant="h6"
                component="label"
                color="#2d3250"
                display="block"
                my={1}
              >
                Name
              </Typography>
              <TextField variant="outlined" name="name" fullWidth />
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="label"
                color="#2d3250"
                display="block"
                my={1}
              >
                Information
              </Typography>
              <TextField
                variant="outlined"
                name="info"
                rows={5}
                multiline
                fullWidth
              />
            </Box>
            <Box display="flex" justifyContent="space-evenly" mx={3} mt={3}>
              <Link style={{ textDecoration: "none" }} to="..">
                <Button
                  variant="outlined"
                  sx={{
                    color: "#2d3250",
                    border: "1px solid rgba(45, 50, 80, 0.5)",
                    px: 3,
                  }}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  backgroundColor: "#2d3250",
                  px: 3,
                }}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Form>
        </Box>
      </Modal>
    </>
  );
};

export default CreatePost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}
