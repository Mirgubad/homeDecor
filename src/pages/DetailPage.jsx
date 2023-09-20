import { useGetProductByIdQuery } from "../services/product";
import { useParams } from "react-router-dom";
import DetailsSlider from "../components/DetailsSlider";
import DetailsTop from "../components/DetailsTop";
import Loader from "../components/Loader";
import ProductDetails from "../components/ProductDetails";
import React from "react";
import SimilarItems from "../components/SimilarItems";

const DetailPage = () => {
  const params = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(params.id);

  return isLoading || !product ? (
    <Loader />
  ) : (
    <main>
      <DetailsTop>
        <DetailsSlider>
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
        </DetailsSlider>
        {product && <ProductDetails {...product} />}
      </DetailsTop>
      {product && (
        <SimilarItems productId={product.id} categoryId={product.categoryId} />
      )}
    </main>
  );
};

export default DetailPage;
