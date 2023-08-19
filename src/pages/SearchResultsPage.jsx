import React, { useEffect, useState } from "react";
import SectionTop from "../components/SectionTop";
import BreadCrumbs from "../components/BreadCrumbs";
import Results from "../components/Results";
import ProductElement from "../components/ProductElement";

const SearchResultsPage = ({ key }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 8;
  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const res = await response.json();
    setProducts(res);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = products.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(products.length / productsPerPage);

  return (
    <main>
      <div className="container">
        <SectionTop title="Search results" />
        <p style={{ marginBottom: "5rem" }}>Your results for "sofa"</p>
        <Results
          pageCount={pageCount}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        >
          {currentProducts.map((product) => (
            <ProductElement
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              currency={product.currency}
            />
          ))}
        </Results>
      
      </div>
    </main>
  );
};

export default SearchResultsPage;
