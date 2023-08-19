import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import SalePage from "./pages/SalePage";
import ProductsPage from "./pages/ProductsPage";
import CollectionsPage from "./pages/CollectionsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import "./index.css";
import { Suspense } from "react";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import SearchResultsPage from "./pages/SearchResultsPage";

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback="...loading">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/sale" element={<SalePage />}></Route>
              <Route path="/products" element={<ProductsPage />}></Route>
              <Route path="/collections" element={<CollectionsPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="/card" element={<ShoppingCardPage />}></Route>
              <Route path="/results" element={<SearchResultsPage />}></Route>
              {/* <Route path="/details/:id" element={<DetailPage />}></Route> */}
            </Route>

            <Route path="auth/">
              <Route path="register" element={<RegisterPage />}></Route>
              <Route path="login" element={<LoginPage />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
