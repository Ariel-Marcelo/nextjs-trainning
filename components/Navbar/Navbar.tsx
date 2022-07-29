import React from 'react';
// Este link de next me permite enlazar páginas para renderizarlas 
// del lado del cliente, no solo páginas cualquier recurso

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        
      </menu>
    </nav>
  );
};

export default Navbar;