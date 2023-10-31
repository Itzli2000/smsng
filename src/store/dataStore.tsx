import { create } from 'zustand'
import { DataStore, Product } from '../types/dataStore.types';

const useDataStore = create<DataStore>((set) => ({
  products: [],
  setProducts: (products: Product[]) => {
    set({ products });
  },
}));

export default useDataStore;