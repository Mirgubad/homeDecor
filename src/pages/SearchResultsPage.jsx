import { useGetAllProductsQuery } from "../services/product";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import ProductElement from "../components/ProductElement";
import React, { useEffect, useState } from "react";
import Results from "../components/Results";
import SectionTop from "../components/SectionTop";

const SearchResultsPage = ({ key }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const { data: products, isLoading } = useGetAllProductsQuery();
  const { search } = useLocation();
  const productsPerPage = 8;
  const queryString = new URLSearchParams(search);
  const searchValue = decodeURIComponent(queryString.get("search"));

  useEffect(() => {
    if (searchValue !== "") {
      const results = products?.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchValue, products]);
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = searchResults?.slice(
    offset,
    offset + productsPerPage
  );
  const pageCount = Math.ceil(searchResults?.length / productsPerPage);

  return isLoading || !products ? (
    <Loader />
  ) : (
    <main>
      <div className="container">
        <SectionTop title="Search results" />
        <p style={{ marginBottom: "5rem" }}>Your results for "{searchValue}"</p>
        {currentProducts && currentProducts.length > 0 ? (
          <Results
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageClick={handlePageClick}
          >
            {currentProducts?.map((product) => (
              <ProductElement key={product.id} {...product} />
            ))}
          </Results>
        ) : (
          <h2 style={{ marginBottom: "5rem" }}>No results found...</h2>
        )}
      </div>
    </main>
  );
};

export default SearchResultsPage;
