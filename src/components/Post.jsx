import { Box, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Grid item xs={4}>
      <Link to={`/${post.id}`} style={{ textDecoration: "none" }}>
        <Paper
          variant="post"
          elevation={2}
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 1px 3px 1px rgba(255, 255, 255, 0.4)",
          }}
        >
          <Box ml={2} mr={1} py={1}>
            <Typography variant="h6" component="h4" color="primary">
              {post.name}
            </Typography>
            <Typography variant="body1" component="p" my={2}>
              {post.info}
            </Typography>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default Post;
