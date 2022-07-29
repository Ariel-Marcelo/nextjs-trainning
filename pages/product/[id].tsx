import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card } from "@components/Card/Card";

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
    <section>
      {product && (
        <Card
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      )}
    </section>
  );
};

export default ProductPage;
