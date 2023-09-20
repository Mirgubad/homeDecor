import { useGetAllProductsQuery } from "../../services/product";
import ProductElement from "../ProductElement";
import React from "react";
import SectionTop from "../SectionTop";
import SlickSlider from "../SlickSlider";
import styles from "../SimilarItems/similarProducts.module.css";

const SimilarItems = ({ productId, categoryId }) => {
  const { data: products } = useGetAllProductsQuery();
  let filteredProducts;
  filteredProducts = products?.filter(
    (p) => p.categoryId == categoryId && p.id !== productId
  );
  const options = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    filteredProducts &&
    filteredProducts.length > 0 && (
      <section className={styles["similar"]}>
        <div className={`${styles["similar__items"]} container`}>
          <SectionTop title="similar products" />
          <SlickSlider options={options}>
            {filteredProducts.map((fp) => (
              <ProductElement key={fp.id} {...fp} />
            ))}
          </SlickSlider>
        </div>
      </section>
    )
  );
};

export default SimilarItems;
