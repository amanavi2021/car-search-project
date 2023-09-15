import { lazy } from "react";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "../components/SharedLayout";

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage/>} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<CatalogPage />} />
        <Route path="*" element={<HomePage/>} />
      </Route>
    </Routes>
  );
};
