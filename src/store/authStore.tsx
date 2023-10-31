import { create } from 'zustand'
import { AuthStoreType } from './types';

const useAuthStore = create<AuthStoreType>()((set) => ({
  isAuthenticated: false,
  user: null,

  login: (email: string, password: string) => {
    if (email === "usuario@example.com" && password === "contraseña") {
      set({ isAuthenticated: true, user: { email } });
    } else {
      console.error("Credenciales inválidas");
    }
    return Promise.resolve('user is logged');
  },

  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;
