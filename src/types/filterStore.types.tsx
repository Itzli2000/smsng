export type Filter = {
  stores: string[];
  models: string[];
};

export type FilterStore = {
  filters: Filter;
  setFilters: (newFilters: Partial<Filter>) => void;
};
