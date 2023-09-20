import { useGetAllCategoriesQuery } from "../services/category";
import { useGetAllCollectionsQuery } from "../services/collections";
import { useGetDiscountDataQuery } from "../services/discount";
import { useGetHomeIntroQuery } from "../services/homeIntro";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import { useTranslation } from "react-i18next";
import {
  useGetPopularProductsQuery,
  useGetAllProductsHomeQuery,
} from "../services/product";
import AboutUs from "../components/AboutUs";
import CategoryElement from "../components/CategoryElement";
import Contact from "../components/Contact";
import Discount from "../components/Discount";
import HomeCollections from "../components/HomeCollections";
import HomeIntro from "../components/HomeIntro";
import HomeMainSlider from "../components/HomeMainSlider";
import HomeProducts from "../components/HomeProducts";
import PopularProducts from "../components/PopularProducts";
import ProductElement from "../components/ProductElement";
import React from "react";

const HomePage = () => {
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: collections } = useGetAllCollectionsQuery();
  const { data: discount } = useGetDiscountDataQuery();
  const { data: homeIntro, isLoading } = useGetHomeIntroQuery();
  const { data: popularProducts } = useGetPopularProductsQuery();
  const { data: products } = useGetAllProductsHomeQuery();
  const { t } = useTranslation();

  useSetPageTitle(t("webTitle"));
  return (
    <main>
      {/* <p>{t('homeIntro.title')}</p>
    <p>{t('homeIntro.description')}</p> */}
      {homeIntro && <HomeIntro {...homeIntro} />}
      {categories && (
        <HomeMainSlider>
          {categories.map((category) => (
            <CategoryElement type="category" key={category.id} {...category} />
          ))}
        </HomeMainSlider>
      )}

      <AboutUs />

      {discount && <Discount {...discount} />}

      {products && (
        <HomeProducts title="Products">
          {products.map((product) => (
            <ProductElement key={product.id} {...product} />
          ))}
        </HomeProducts>
      )}
      {popularProducts && (
        <PopularProducts title="Most POPULAR">
          {popularProducts.map((product) => (
            <ProductElement key={`a-${product.id}`} {...product} />
          ))}
        </PopularProducts>
      )}

      {collections && (
        <HomeCollections title="collections">
          {collections.map((product) => (
            <CategoryElement key={`a-${product.id}`} {...product} />
          ))}
        </HomeCollections>
      )}

      <Contact />
    </main>
  );
};

export default HomePage;
