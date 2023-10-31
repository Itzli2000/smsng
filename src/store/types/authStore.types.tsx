export type User = {
    email: string;
    name?: string
  };

export type AuthStoreType = {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
  };