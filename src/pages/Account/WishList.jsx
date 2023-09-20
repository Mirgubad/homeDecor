import { useGetAllProductsQuery } from "../../services/product";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import WishListElement from "../../components/WishListElement";

const WishList = () => {
  const { data: products } = useGetAllProductsQuery();
  const [savedItems, setSavedItems] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("favourites"));
    setSavedItems(localStorageItems || []);
  }, []);

  useEffect(() => {
    const filteredWishList =
      products && Array.isArray(savedItems)
        ? products.filter((p) => savedItems.includes(p.id))
        : [];
    setWishList(filteredWishList);
  }, [products, savedItems]);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = savedItems.filter((itemId) => itemId !== productId);
    setSavedItems(updatedWishlist);
    setWishList(updatedWishlist);
    toast.success("Product removed from favourites");
    localStorage.setItem("favourites", JSON.stringify(updatedWishlist));
  };

  return (
    <section style={{ flex: "2" }}>
      {wishList.length > 0 ? (
        wishList.map((item) => (
          <WishListElement
            key={item.id}
            {...item}
            onDelete={() => removeFromWishlist(item.id)}
          />
        ))
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "15rem" }}>
          Wish list is empty...
        </h2>
      )}
    </section>
  );
};

export default WishList;
