import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Grid, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid container>
      <Grid item xs={12} lg={6} style={{ margin: "auto" }}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Typography component="h1" variant="h5">
          Vite + React
        </Typography>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <Typography>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Typography>
        </div>
        <Typography>Click on the Vite and React logos to learn more</Typography>
      </Grid>
    </Grid>
  );
}

export default App;
