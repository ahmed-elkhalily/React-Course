import { Routes, Route } from "react-router";
// pages
import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage";
import UsersPage from "./UsersPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}
