import React from "react";
import { useRouter } from "next/router";

const Nombre_Usuario = () => {
  /*
  const router = useRouter();

  return (
    <div>
      <p> Hola {router.query.nombre} </p>
    </div>
  );
  */

  const { 
    query: {nombre, test, id}
  } = useRouter();

  return (
    <div>
      <p> Hola {nombre} con id {id} sacaste un {test}  </p>
    </div>
  );
}

export default Nombre_Usuario;