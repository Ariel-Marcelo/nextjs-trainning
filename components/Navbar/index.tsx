import React from "react";
// Este link de next me permite enlazar páginas para renderizarlas
// del lado del cliente, no solo páginas cualquier recurso
import Link from "next/link";
import { GlobalCountContex} from "@components/Context";

const Navbar = () => {
  const { state, dispatch } = React.useContext(GlobalCountContex);
  return (
    <nav>
      <menu>
        <Link href="/">
          <a>Avo Store</a>
        </Link>
        <Link href="/about">
          <a> Canasta {state.forSale} </a>
        </Link>
      </menu>
    </nav>
  );
};

export { Navbar };
