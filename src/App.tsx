import { Grid, Typography } from "@mui/material";
import useAuthStore from "./store/authStore";
import useDataStore from "./store/dataStore";
import useFilterStore from "./store/filterStore";

function App() {
  const { isAuthenticated, user } = useAuthStore();
  const { filters } = useFilterStore();
  const { products } = useDataStore();


  return (
    <Grid container>
      <Grid item xs={12} lg={6} style={{ margin: "auto" }}>
        <Typography>isAuthenticated: {isAuthenticated}</Typography>
        <Typography>user: {JSON.stringify(user)}</Typography>
        <Typography>filters: {JSON.stringify(filters)}</Typography>
        <Typography>products: {JSON.stringify(products)}</Typography>
      </Grid>
    </Grid>
  );
}

export default App;
