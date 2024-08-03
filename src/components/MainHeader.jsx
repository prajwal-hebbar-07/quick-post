import { Box, Button, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
          <Button variant="contained">
            New post <AddIcon fontSize="small" sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default MainHeader;
