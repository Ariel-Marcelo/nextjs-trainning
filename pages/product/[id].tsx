import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SellCard } from "@components/SellCard";
import { ProductCard } from "@components/ProductCard";
import { ProductAttributes } from "@components/ProductAttributes";



interface CountState {
  forSale: number;
}
type LayoutProps = {
  children: React.ReactNode;
  state: CountState;
}


const ProductPage = () => {
  // state
  const [product, setProduct] = useState<TProduct>();
  // router
  const {
    query: { id },
  } = useRouter();

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
            description={product.attributes.description}
          >
            <SellCard
              id={product.id}
              name={product.name}
              price={product.price}
              sku={product.sku}
            />
          </ProductCard>
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
