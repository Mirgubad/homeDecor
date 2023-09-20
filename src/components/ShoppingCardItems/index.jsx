import { t } from "i18next";
import { useGetAllBasketProductsQuery } from "../../services/basketProducts";
import { useGetAllProductsQuery } from "../../services/product";
import Loader from "../Loader";
import React, { useEffect, useState } from "react";
import ShoppingCartElement from "../ShoppingCartElement";
import styles from "./shoppingCardLeft.module.css";
import toast from "react-hot-toast";

const ShoppingCardItems = ({ setTotalPriceForSummary }) => {
  const {
    data: basketProducts,
    isLoading,
    refetch: refetchBasketProducts,
  } = useGetAllBasketProductsQuery();
  const { data: products } = useGetAllProductsQuery();

  const [colors, setColors] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // State for total price
  useEffect(() => {
    setTotalPriceForSummary(totalPrice.toFixed(2));
  }, [totalPrice]);
  const updateProductCount = (id, newCount, price) => {
    const parsedPrice = parseFloat(price);

    fetch(`http://localhost:3000/basketProduct/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((product) => {
        // Calculate the change in total price
        const priceChange = (newCount - product.count) * parsedPrice;

        // Update the product count and total price
        product.count = newCount;

        fetch(`http://localhost:3000/basketProduct/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((response) => {
            if (!response.ok) {
              toast.error("Failed to update product count on the server");
              throw new Error("Failed to update product count on the server");
            }
            setTotalPrice(
              (prevTotalPrice) => prevTotalPrice + Number(priceChange)
            );
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/colors")
      .then((response) => response.json())
      .then((data) => setColors(data))
      .catch((error) => console.error("Error fetching colors:", error));

    // Calculate the initial total price when component mounts
    if (basketProducts && products) {
      const initialTotalPrice = basketProducts.reduce((total, bp) => {
        const product = products.find((p) => p.id === bp.productId);
        return total + product.price * bp.count;
      }, 0);
      setTotalPrice(initialTotalPrice);
    }
  }, [basketProducts, products]);

  const handleDeleteBasketProduct = (basketProductId) => {
    fetch(`http://localhost:3000/basketProduct/${basketProductId}`, {
      method: "DELETE",
    })
      .then(() => {
        refetchBasketProducts();
        toast.success("Product deleted from basket");
      })
      .catch((error) => console.error("Error deleting basket product:", error));
  };

  const filteredBasketProducts = basketProducts?.filter((bp) =>
    products?.some((product) => bp.productId === product.id)
  );

  return isLoading || !filteredBasketProducts ? (
    <Loader />
  ) : (
    <div className={styles["items"]}>
      {filteredBasketProducts?.map((bp) => {
        const product = products.find((p) => p.id === bp.productId);
        const color = colors.find((c) => c.id === bp.colorId);
        return (
          <ShoppingCartElement
            key={bp.id}
            basketProductId={bp.id}
            updateProductCount={updateProductCount} // Pass the update function
            {...product}
            productId={bp.id}
            count={bp.count}
            colorName={color?.title}
            onDelete={() => {
              handleDeleteBasketProduct(bp.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default ShoppingCardItems;
