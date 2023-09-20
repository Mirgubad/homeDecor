import React, { lazy, Suspense } from "react";
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Info = lazy(() => import("./pages/Account/Info"));
const WishList = lazy(() => import("./pages/Account/WishList"));
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountLayout from "./layouts/AccountLayout";
import CollectionsPage from "./pages/CollectionsPage";
import ContactPage from "./pages/ContactPage";
import DetailPage from "./pages/DetailPage";
import ErrorsPage from "./pages/ErrorsPage";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Loader from "./components/Loader";
import LoginPage from "./pages/Auth/LoginPage";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import ProtectedRoute from "./utils/ProtectecRoute";
import RegisterPage from "./pages/Auth/RegisterPage";
import ResetPassword from "./pages/Auth/ResetPassword";
import SearchResultsPage from "./pages/SearchResultsPage";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import VerificationReset from "./pages/Auth/VerificationReset";

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/products" element={<ProductsPage />}></Route>
              <Route path="/checkout" element={<CheckOut />}></Route>
              <Route path="/collections" element={<CollectionsPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route
                path="/card"
                element={
                  <ProtectedRoute>
                    <ShoppingCardPage />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/results" element={<SearchResultsPage />}></Route>
              <Route
                path="/details/:id/:title"
                element={<DetailPage />}
              ></Route>
              <Route path="error" element={<ErrorsPage />}></Route>
            </Route>

            <Route path="auth/" element={<LoginRegisterLayout />}>
              <Route path="register" element={<RegisterPage />}></Route>
              <Route path="resetpassword" element={<ResetPassword />}></Route>
              <Route path="forgotpassword" element={<ForgotPassword />}></Route>
              <Route
                path="verification"
                element={<VerificationReset />}
              ></Route>
              <Route path="login" element={<LoginPage />}></Route>
            </Route>

            <Route path="myaccount/" element={<AccountLayout />}>
              <Route path="info" element={<Info />}></Route>
              <Route path="wishlist" element={<WishList />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
