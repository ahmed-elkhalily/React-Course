import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { Article } from "./pages/article";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="article/:id" element={<Article />} />
    </Routes>
  );
}
