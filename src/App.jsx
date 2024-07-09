import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import NenniesPage from "./page/NenniesPage/NenniesPage";
import FavoritesPage from "./page/FavoritesPage/FavoritesPage";
import SharedLayout from "./shared/components/SharedLayout";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={HomePage} />
          <Route path="nennies" element={NenniesPage} />
          <Route path="favorites" element={FavoritesPage} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};
