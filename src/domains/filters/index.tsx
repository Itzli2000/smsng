import { Typography } from "@mui/material";
import useDataStore from "../../store/dataStore";
import useFilterStore from "../../store/filterStore";

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
