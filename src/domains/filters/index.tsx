import { Typography } from "@mui/material";
import { useDataStore, useFilterStore } from "../../store";

const Filters = () => {
  const { filters } = useFilterStore();
  const { products } = useDataStore();
  return (
    <div>
      <Typography>filters: {JSON.stringify(filters)}</Typography>
      <Typography>products: {JSON.stringify(products)}</Typography>
    </div>
  );
};

export default Filters;
