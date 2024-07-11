import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import SubcategoryPage from '../pages/SubcategoryPage';
import CategoriesPage from '../pages/CategoriesPage';
import VideoPlayerPage from '../pages/VideoPlayerPage';
import SearchPage from '../pages/SearchPage';
import CookiePolicyPage from '../pages/CookiePolicyPage';

export const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/category/:category_slug" element={<CategoriesPage />} />
          <Route
            path="/category/:category_slug/subcategory/:subcategory_slug"
            element={<SubcategoryPage />}
          />
          <Route path="/search/:query" element={<SearchPage />} />
        </Route>
        <Route
          path="/player/:category_slug/:subcategory_slug/:video_slug"
          element={<VideoPlayerPage />}
        />
        <Route path="/cookies-policy" element={<CookiePolicyPage />} />
      </Routes>
    </Router>
  );
};
