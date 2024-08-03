import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import { Box, Divider } from "@mui/material";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Divider variant="middle" sx={{ mx: 5, border: 2, my: 3 }} />
      <Outlet />
    </>
  );
};

export default RootLayout;
