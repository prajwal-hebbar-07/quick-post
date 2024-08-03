import { useState } from "react";

import { Typography, Modal, Box, Button } from "@mui/material";
import { useLoaderData, useParams } from "react-router-dom";

const PostDetails = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 1px 3px 1px rgba(255, 255, 255, 0.4)",
    borderRadius: "5px",
    p: 4,
  };
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const post = useLoaderData();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box ml={2} mr={1} py={1}>
            <Typography variant="h6" component="h4" color="primary">
              {post.name}
            </Typography>
            <Typography variant="body1" component="p" my={2}>
              {post.info}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const data = await response.json();

  return data.post;
}
