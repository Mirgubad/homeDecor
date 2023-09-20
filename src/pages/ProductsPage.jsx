import { useGetAllCategoriesQuery } from "../services/category";
import { useGetAllCollectionsQuery } from "../services/collections";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import Aside from "../components/Aside";
import FilterElements from "../components/FilterElements";
import HomeProducts from "../components/HomeProducts";
import ProductElement from "../components/ProductElement";
import ProductsContainer from "../components/ProductsContainer";
import React, { useEffect, useState } from "react";
import SectionTop from "../components/SectionTop";
import SectionTopBottom from "../components/SectionTopBottom";
import SortSelect from "../components/SortSelect";

const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectedSort, setSelectedSort] = useState(null);
  const { data: categories, isLoading: isCategoryLoading } =
    useGetAllCategoriesQuery();
  const { data: collections, isLoading: isCollectionLoading } =
    useGetAllCollectionsQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

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
          a.isPopular === b.isPopular ? a.id - b.id : b.isPopular - a.isPopular
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

  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const res = await response.json();
    setProducts(res);
  };

  const onFilterCategoryClick = (filterId, filterType) => {
    if (
      (filterType === "category" && !selectedCategories.includes(filterId)) ||
      (filterType === "collections" && !selectedCollections.includes(filterId))
    ) {
      let updatedCategories = selectedCategories;
      let updatedCollections = selectedCollections;

      if (filterType === "category") {
        updatedCategories = [...selectedCategories, filterId];
      } else if (filterType === "collections") {
        updatedCollections = [...selectedCollections, filterId];
      }
      setSelectedCategories(updatedCategories);
      setSelectedCollections(updatedCollections);
      const updatedCategoryIds = updatedCategories.join(",");
      const updatedCollectionIds = updatedCollections.join(",");
      navigate(
        `/products?categoryIds=${updatedCategoryIds}&collectionIds=${updatedCollectionIds}`
      );
    }
  };
  let filteredProducts = [...products];

  if (selectedCategories.length > 0 || selectedCollections.length > 0) {
    filteredProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.categoryId);
      const collectionMatch =
        selectedCollections.length === 0 ||
        selectedCollections.includes(product.collectionId);

      return categoryMatch && collectionMatch;
    });
  }

  const onRemoveFilterClick = (filterId, filterType, allIsTrue) => {
    let removedCategories = [];
    let removedCollections = [];
    let updatedCategoryIds = selectedCategories;
    let updatedCollectionIds = selectedCollections;
    if (filterType === "category") {
      removedCategories = selectedCategories.filter(
        (ctId) => ctId !== filterId
      );
      setSelectedCategories(removedCategories);

      updatedCategoryIds = removedCategories.join(",");
    } else if (filterType === "collections") {
      removedCollections = selectedCollections.filter(
        (cId) => cId !== filterId
      );
      setSelectedCollections(removedCollections);
      updatedCollectionIds = removedCollections.join(",");
    }
    navigate(
      `/products?categoryIds=${updatedCategoryIds}&collectionIds=${updatedCollectionIds}`
    );
  };

  useEffect(() => {
    getProducts();

    const categoryIds = queryParams.getAll("categoryIds")[0]
      ? queryParams
          .getAll("categoryIds")[0]
          .split(",")
          .map((item) => parseInt(item, 10))
      : [];

    const collectionIds = queryParams.getAll("collectionIds")[0]
      ? queryParams
          .getAll("collectionIds")[0]
          .split(",")
          .map((item) => parseInt(item, 10))
      : [];

    if (categoryIds.length > 0) {
      setSelectedCategories(categoryIds);
    }
    if (collectionIds.length > 0) {
      setSelectedCollections(collectionIds);
    }
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
            {categories && (
              <FilterElements
                title="Categories"
                filterType="category"
                setFilters={setSelectedCategories}
                removeFilterClick={onRemoveFilterClick}
                onFilterClick={onFilterCategoryClick}
                filterItems={selectedCategories}
                options={categories}
              />
            )}
            {collections && (
              <FilterElements
                title="Collections"
                filterType="collections"
                setFilters={setSelectedCollections}
                removeFilterClick={onRemoveFilterClick}
                onFilterClick={onFilterCategoryClick}
                filterItems={selectedCollections}
                options={collections}
              />
            )}
          </Aside>
          <HomeProducts>
            {filteredProducts &&
              filteredProducts.map((product) => (
                <ProductElement key={product.id} {...product} />
              ))}
          </HomeProducts>
        </ProductsContainer>
      </div>
    </main>
  );
};

export default ProductsPage;
