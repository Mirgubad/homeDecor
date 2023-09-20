import { useGetAllBasketProductsQuery } from "../services/basketProducts";
import { useGetAllProductsQuery } from "../services/product";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import Loader from "../components/Loader";
import React, { useState, useEffect } from "react";
import SectionTop from "../components/SectionTop";
import ShoppingCardItems from "../components/ShoppingCardItems";
import ShoppingCartContainer from "../components/ShoppingCartContainer";
import Summary from "../components/Summary";

const ShoppingCardPage = () => {
  const [totalPriceForSummary, setTotalPriceForSummary] = useState(0);
  const { data: products, isLoading: productsIsLoading } =
    useGetAllProductsQuery();
  const {
    data: basketProducts,
    isLoading: basketProductsIsLoading,
    refetch: refetchBasketProducts,
  } = useGetAllBasketProductsQuery();
  const user = JSON.parse(localStorage.getItem("user"));

  const filteredBasketProducts = basketProducts?.filter((bp) =>
    products?.some(
      (product) => bp.userId === user?.id && bp.productId === product.id
    )
  );

  useEffect(() => {
    refetchBasketProducts();
  }, []);

  useSetPageTitle("Shopping cart");

  return basketProductsIsLoading ||
    productsIsLoading ||
    !basketProducts ||
    !products ? (
    <Loader />
  ) : (
    <main>
      <div className="container">
        <SectionTop title="Shopping cart" />
        {filteredBasketProducts?.length > 0 ? (
          <ShoppingCartContainer>
            <ShoppingCardItems
              setTotalPriceForSummary={setTotalPriceForSummary}
            />
            <Summary
              count={filteredBasketProducts?.length}
              totalPriceForSummary={totalPriceForSummary}
            />
          </ShoppingCartContainer>
        ) : (
          <p style={{ textAlign: "center" }}>Your shopping cart is empty...</p>
        )}
      </div>
    </main>
  );
};

export default ShoppingCardPage;
