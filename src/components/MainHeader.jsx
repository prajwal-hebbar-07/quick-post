import { Box, Button, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <Container maxWidth="fluid">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={2}
        >
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            color="secondary"
          >
            QuickPost
          </Typography>
          <Link to="/create-post" style={{ textDecoration: "none" }}>
            <Button variant="contained">
              Create Post <AddIcon fontSize="small" sx={{ ml: 1 }} />
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default MainHeader;
