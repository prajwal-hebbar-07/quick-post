import { Outlet, useLoaderData } from "react-router-dom";

import { Box, Container, Grid, Typography } from "@mui/material";
import Post from "../components/Post";

const Home = () => {
  const posts = useLoaderData();

  console.log(posts);

  return (
    <>
      <Container maxWidth="lg" sx={{ my: 2 }}>
        {posts.length > 0 ? (
          <Box>
            <Grid container spacing={4}>
              {posts.map((post) => (
                <Post key={post.id} post={post}></Post>
              ))}
            </Grid>
          </Box>
        ) : (
          <Box textAlign="center">
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              my={1}
              color="secondary"
            >
              No Posts Yet!
            </Typography>
            <Typography variant="body1" component="p" my={2}>
              Try to add posts!
            </Typography>
          </Box>
        )}
      </Container>
      <Outlet />
    </>
  );
};

export default Home;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();

  return data.posts;
}
