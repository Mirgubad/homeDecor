import React, { useEffect, useState } from "react";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import SectionTop from "../components/SectionTop";
import SectionTopBottom from "../components/SectionTopBottom";
import SortSelect from "../components/SortSelect";
import ProductsContainer from "../components/ProductsContainer";
import Aside from "../components/Aside";
import FilterElements from "../components/FilterElements";
import FiltersContainer from "../components/FiltersContainer";
import HomeProducts from "../components/HomeProducts";
import ProductElement from "../components/ProductElement";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);
  const [collections, setCollectons] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);
  const sortTypes = [
    { id: 1, title: "popular first" },
    { id: 2, title: "cheapest first" },
    { id: 3, title: "expensive first" },
  ];
  const params = useParams();
  const handleSortClick = (sort) => {
    if (sort.title == "popular first") {
      setProducts(
        products.sort((a, b) =>
          a.popular === b.popular ? a.id - b.id : b.popular - a.popular
        )
      );
    } else if (sort.title == "cheapest first") {
      setProducts(products.sort((a, b) => a.price - b.price));
    } else if (sort.title == "expensive first") {
      setProducts(products.sort((a, b) => b.price - a.price));
    }
    setSelectedSort(sort);
    setOpen(false);
  };
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
          <SortSelect
            open={open}
            setOpen={setOpen}
            sortTypes={sortTypes}
            onSortClick={handleSortClick}
          />
        </SectionTopBottom>
        <ProductsContainer>
          <Aside>
            <FiltersContainer title="Categories">
              <FilterElements title="all" value={0} />
              {categories &&
                categories.map((category) => (
                  <FilterElements
                    value={category.id}
                    key={`ct${category.id}`}
                    id={`ct${category.id}`}
                    title={category.title}
                  />
                ))}
            </FiltersContainer>
            <FiltersContainer title="Collections">
              <FilterElements value={0} title="all" />
              {collections &&
                collections.map((collection) => (
                  <FilterElements
                    value={collection.id}
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
        </ProductsContainer>
      </div>
    </main>
  );
};

export default ProductsPage;
