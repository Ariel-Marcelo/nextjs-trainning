import React from 'react'
import { GlobalCountContex } from '@components/Context'
import { ShoppingCard } from '@components/ShoppingCard'
import { SellCard } from '@components/SellCard'
import { DispatchToCart } from '@components/DispatchToCart'
import { ProductCard } from '@components/ProductCard'

const AboutPage = () => {
  const {state} = React.useContext(GlobalCountContex);
  return (
    <React.Fragment>
          {state.items.map((product) => {
            return (
              <ProductCard
              image={product.image}
              key={product.id}
            >
              <SellCard
                name={product.name}
                price={product.price}
                sku={product.sku}
              >
                <DispatchToCart
                  id={product.id}
                  count={product.count}
                />
              </SellCard>
            </ProductCard>
            );
          })}
  </React.Fragment>
  )
}

export default AboutPage