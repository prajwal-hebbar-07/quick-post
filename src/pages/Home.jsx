import { Outlet } from "react-router-dom";

import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Typography variant="h5" component="h2">
        Home Page
      </Typography>
      <Outlet />
    </>
  );
};

export default Home;
