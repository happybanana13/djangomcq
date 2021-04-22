import { Link } from "react-router-dom";
import { CssBaseline, Typography, Button, Box } from "@material-ui/core";

function Home() {
  return (
    <div>
      <CssBaseline />
      <Box display="flex" marginTop="40vh">
        <Box align="center" width="50%">
          <Link to="/student" style={{ textDecoration: "none" }}>
            <Button href="student" variant="outlined" size="large">
              <Typography variant="h2">Student Page</Typography>
            </Button>
          </Link>
        </Box>
        <Box align="center" width="50%">
          <Link to="/teacher" style={{ textDecoration: "none" }}>
            <Button href="teacher" variant="outlined" size="large">
              <Typography variant="h2">Teacher Page</Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
