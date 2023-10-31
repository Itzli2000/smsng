import { Typography } from "@mui/material";
import useAuthStore from "../../store/authStore";

const Login = () => {
  const { isAuthenticated, user } = useAuthStore();
  return (
    <div>
      <Typography>isAuthenticated: {isAuthenticated}</Typography>
      <Typography>user: {JSON.stringify(user)}</Typography>
    </div>
  );
};

export default Login;
