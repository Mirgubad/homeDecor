import React, { useEffect, useState } from "react";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import { useTranslation } from "react-i18next";
import HomeIntro from "../components/HomeIntro";
import HomeMainSlider from "../components/HomeMainSlider";
import CategoryElement from "../components/CategoryElement";
import AboutUs from "../components/AboutUs";
import Discount from "../components/Discount";
import ProductElement from "../components/ProductElement";
import HomeProducts from "../components/HomeProducts";
import PopularProducts from "../components/PopularProducts";
import HomeCollections from "../components/HomeCollections";
import Contact from "../components/Contact";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsHome,
  getPopularProducts,
  getProductById,
} from "../slices/productSlice"; // Adjust the path

const HomePage = () => {
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);
  const [discount, setDiscount] = useState({});

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const popularProducts = useSelector((state) => state.product.popularItems);
  const product = useSelector((state) => state.product.item);

  useEffect(() => {
    dispatch(getAllProductsHome());
  }, []);

  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/homeIntro");
    const res = await response.json();
    setData(res);
  };

  const getCategories = async () => {
    const response = await fetch("http://localhost:3000/categories");
    const res = await response.json();
    setCategories(res);
  };

  const getDiscountData = async () => {
    const response = await fetch("http://localhost:3000/discount");
    const res = await response.json();
    setDiscount(res);
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getData(), getCategories(), getDiscountData()]);
    };

    fetchData();
  }, []);
  useSetPageTitle(t("webTitle"));
  return (
    <main>
      {/* <p>{t('homeIntro.title')}</p>
    <p>{t('homeIntro.description')}</p> */}
      <HomeIntro {...data} />
      <HomeMainSlider>
        {categories &&
          categories.map((category) => (
            <CategoryElement key={category.id} {...category} />
          ))}
      </HomeMainSlider>
      <AboutUs />
      <Discount {...discount} />
      <HomeProducts title="Products">
        {products &&
          products.map((product) => (
            <ProductElement
              key={product.id}
              onClick={() => dispatch(getProductById(product.id))}
              {...product}
            />
          ))}
      </HomeProducts>
      <PopularProducts title="Most POPULAR">
        {popularProducts &&
          popularProducts.map((product) => (
            <ProductElement
              key={`a-${product.id}`}
              onClick={() => dispatch(getProductById(product.id))}
              {...product}
            />
          ))}
      </PopularProducts>

      <HomeCollections title="collections">
        {products &&
          products.map((product) => (
            <CategoryElement key={`a-${product.id}`} {...product} />
          ))}
      </HomeCollections>

      <Contact />
    </main>
  );
};

export default HomePage;
