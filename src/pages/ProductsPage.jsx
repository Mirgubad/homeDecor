import React from "react";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import SectionTop from "../components/SectionTop";
import SectionTopBottom from "../components/SectionTopBottom";
import SortSelect from "../components/SortSelect";
import ProductsContainer from "../components/ProductsContainer";

const ProductsPage = () => {
  useSetPageTitle("Products");
  return (
    <main>
      <div className="container">
        <SectionTop title="products" />
        <SectionTopBottom>
          <p style={{ maxWidth: "56rem" }}>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime.
          </p>
          <SortSelect />
        </SectionTopBottom>
        <ProductsContainer></ProductsContainer>
      </div>
    </main>
  );
};

export default ProductsPage;
