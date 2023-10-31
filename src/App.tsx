import { Grid } from "@mui/material";
import AppRoutes from "./components/routes/Routes";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} lg={6} style={{ margin: "auto" }}>
        <AppRoutes />
      </Grid>
    </Grid>
  );
}

export default App;
