import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SellCard } from "@components/SellCard";
import { ProductCard } from "@components/ProductCard";
import { ProductAttributes } from "@components/ProductAttributes";
import { AddToCart } from "@components/AddToCart";
import { ProductDescription } from "@components/ProductDescription";

const ProductPage = () => {
  // state
  const [product, setProduct] = useState<TProduct>();
  // router
  const {
    query: { id },
  } = useRouter();
  // search avo by id
  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  return (
    <React.Fragment>
      {product && (
        <>
          <ProductCard
            image={product.image}
          >
            <SellCard
              name={product.name}
              price={product.price}
              sku={product.sku}
            >
              <AddToCart
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                sku={product.sku}
              />
            </SellCard>
          </ProductCard>
          <ProductDescription description={product.attributes.description}/> 
          <ProductAttributes
            shape={product.attributes.shape}
            hardiness={product.attributes.hardiness}
            taste={product.attributes.taste}
          />
        </>
      )}
    </React.Fragment>
  );
};

export default ProductPage;
