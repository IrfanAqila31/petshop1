import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed lg:px-20 top-0 left-0 w-full bg-orange-50/10 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-orange-500">PawHaven</a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-slate-700 font-semibold">
            <li>
              <a href="#home" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#produk" className="hover:text-orange-500">
                Produk
              </a>
            </li>
            {/* <li>
              <a href="#kontak" className="hover:text-orange-500">
                Kontak
              </a>
            </li> */}
          </ul>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden">
            <label className="cursor-pointer group" title="Hamburger Menu">
              <input
                type="checkbox"
                className="hidden"
                checked={open}
                onChange={() => setOpen(!open)}
              />

              {/* ICON */}
              <svg
                strokeWidth="3"
                className="block w-8 h-8 fill-none stroke-slate-600 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* X ICON */}
                <g strokeWidth="3.5" className={`${open ? "block" : "hidden"}`}>
                  <path
                    d="M0 16 l32 0"
                    className="origin-center rotate-45 transition-transform duration-500 ease-out"
                  ></path>
                  <path
                    d="M0 16 l32 0"
                    className="origin-center -rotate-45 transition-transform duration-500 ease-out"
                  ></path>
                </g>

                {/* DOT GRID ICON */}
                <g
                  className={`origin-center transition-all duration-500 ease-out ${
                    open ? "scale-0" : "scale-100"
                  }`}
                >
                  <circle cx="4" cy="4" r="2"></circle>
                  <circle
                    cx="16"
                    cy="4"
                    r="2"
                    className="group-hover:translate-x-3 transition-transform duration-300 ease-out"
                  ></circle>
                  <circle cx="28" cy="4" r="2"></circle>

                  <circle
                    cx="4"
                    cy="16"
                    r="2"
                    className="group-hover:-translate-y-3 transition-transform duration-300 ease-out"
                  ></circle>
                  <circle cx="16" cy="16" r="2"></circle>
                  <circle
                    cx="28"
                    cy="16"
                    r="2"
                    className="group-hover:translate-y-3 transition-transform duration-300 ease-out"
                  ></circle>

                  <circle cx="4" cy="28" r="2"></circle>
                  <circle
                    cx="16"
                    cy="28"
                    r="2"
                    className="group-hover:-translate-x-3 transition-transform duration-300 ease-out"
                  ></circle>
                  <circle cx="28" cy="28" r="2"></circle>
                </g>
              </svg>
            </label>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {open && (
          <ul className="md:hidden bg-orange-50/10 backdrop-blur-sm shadow-sm border-t border-slate-100 flex flex-col p-5 gap-5 text-slate-700 font-semibold">
            <li>
              <a href="#home" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#produk" className="hover:text-orange-500">
                Produk
              </a>
            </li>
            {/* <li>
              <a href="#kontak" className="hover:text-orange-500">
                Kontak
              </a>
            </li> */}
          </ul>
        )}
      </nav>
    </>
  );
}
