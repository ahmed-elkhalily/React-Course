import { Routes, Route } from "react-router";
// pages
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import UsersPage from "./pages/UsersPage";
import BlogPage from "./pages/blog/BlogPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
    </Routes>
  );
}
