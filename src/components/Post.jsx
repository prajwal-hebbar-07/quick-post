import { Grid } from "@mui/material";

const Post = ({ post }) => {
  return (
    <Grid item xs={3}>
      <p>{post.name}</p>
    </Grid>
  );
};

export default Post;
