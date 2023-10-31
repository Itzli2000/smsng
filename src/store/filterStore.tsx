import { create } from 'zustand'
import { Filter, FilterStore } from './types';

const useFilterStore = create<FilterStore>((set) => ({
  filters: {
    stores: [],
    models: [],
  },
  setFilters: (newFilters: Partial<Filter>) => {
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
      },
    }));
  },
}));

export default useFilterStore;
