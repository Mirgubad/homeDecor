import React, { useEffect, useState } from "react";
import Aside from "../Aside";
import styles from "../ProductsContainer/products.module.css";
import FilterElements from "../FilterElements";
import FiltersContainer from "../FiltersContainer";
import HomeProducts from "../HomeProducts";
import ProductElement from "../ProductElement";

const ProductsContainer = () => {
  const [categories, setCategories] = useState([]);
  const [collections, setCollectons] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = async () => {
    const response = await fetch("http://localhost:3000/categories");
    const res = await response.json();
    setCategories(res);
  };

  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const res = await response.json();
    setProducts(res);
  };
  const getCollections = async () => {
    const response = await fetch("http://localhost:3000/collections");
    const res = await response.json();
    setCollectons(res);
  };

  useEffect(() => {
    getCategories();
    getCollections();
    getProducts();
  }, []);
  return (
    <section className={styles.product}>
      <Aside>
        <FiltersContainer title="Categories">
          {categories &&
            categories.map((category) => (
              <FilterElements
                key={`ct${category.id}`}
                id={`ct${category.id}`}
                title={category.title}
              />
            ))}
        </FiltersContainer>
        <FiltersContainer title="Collections">
          {collections &&
            collections.map((collection) => (
              <FilterElements
                key={`cs${collection.id}`}
                id={`cs${collection.id}`}
                title={collection.title}
              />
            ))}
        </FiltersContainer>
      </Aside>
      <HomeProducts>
        {products &&
          products.map((product) => (
            <ProductElement
              key={product.id}
              // onClick={() => dispatch(getProductById(product.id))}
              {...product}
            />
          ))}
      </HomeProducts>
    </section>
  );
};

export default ProductsContainer;
