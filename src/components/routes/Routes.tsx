import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Filters, Login } from "../../domains";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="search" element={<Filters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
