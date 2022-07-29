import React from "react";
import Search from "../components/Search/Search";
import { Card } from "../components/Card/Card";

const HomePage = () => {
  // estado que guarda toda la lista de productos
  const [productList, setProductList] = React.useState<TProduct[]>([]);
  // estado para saber si mostrar la lista por defecto
  const [showDeafult, setShowDefault] = React.useState<boolean>(true);
  // id del item buscado
  const [idItemSearched, setIdItemSearched] = React.useState<TProductId>("");
  // nombre del item buscado
  const [itemSearched, setItemSearched] = React.useState<TProduct | null>(null);

  // si carga la pag por primera vez muestra la lista por defecto
  React.useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => setProductList(data));
  }, []);
  // si existe cambio en el itemIdSearched entonces busca el producto por su id
  React.useEffect(() => {
    window
      .fetch(`/api/avo/${idItemSearched}`)
      .then((res) => res.json())
      .then((data) => setItemSearched(data));
  }, [idItemSearched]);

  

  return (
    <div>
      <h1> Hola Platzi </h1>
      <Search setItem={setIdItemSearched} showDeafult={setShowDefault} />
      {!showDeafult && itemSearched && (
        <Card
          id={itemSearched.id}
          name={itemSearched.name}
          price={itemSearched.price}
          image={itemSearched.image}
        />
      )}
      {showDeafult &&
        productList.map((product) => {
          return (
            <Card
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
    </div>
  );
};

export default HomePage;
