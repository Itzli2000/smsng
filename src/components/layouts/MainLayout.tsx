import { Outlet } from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";

const MainLayout = () => {
  return (
    <PrivateRoute>
      <div>
        <Outlet />
      </div>
    </PrivateRoute>
  );
};

export default MainLayout;
