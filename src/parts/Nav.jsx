import React, { useState } from "react";
import { navLinks } from "../constants/index.js";
const NavItems = () => {
  return  (
    <ul className="nav-ul">
  
      {navLinks.map(({id,href,name})=>(
        <li key={id} className="nav-li text-xl">
          <a href={href} className="nav-li_a " onClick={()=>{}}>{name}</a>
        </li>
      ))}

    </ul>
  )
};

const Nav = () => {
  const [resp, setresp] = useState(false);

  const togglemenu = () => setresp((prevIsopen) => !prevIsopen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-3xl hover:text-white transition-colors"
          >
            Harshal
          </a>

          <button
            onClick={togglemenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={resp ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
            
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${resp?'max-h-screen': 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
