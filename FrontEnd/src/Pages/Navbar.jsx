import React from "react";
import { Link } from "react-router-dom";
function Navbar({ search, setsearch, favorites = 0 }) {
  return (
    <div>
      <div className="flex justify-between px-10 py-5">
        <div className="">
          <h1 className="text-2xl font-serif font-semibold text-[#3563E9]">
            <Link to={"/"}>AgaCar</Link>
          </h1>
        </div>
        <div className="relative w-[500px]">
          <input
            type="text"
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search something here"
            className="w-full pl-10 pr-12 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5 2C10.6716 2 10 2.67157 10 3.5C10 4.32843 10.6716 5 11.5 5C12.3284 5 13 4.32843 13 3.5C13 2.67157 12.3284 2 11.5 2ZM9.05001 3C9.28164 1.85888 10.2905 1 11.5 1C12.7095 1 13.7184 1.85888 13.95 3H16V4H13.95C13.7184 5.14112 12.7095 6 11.5 6C10.2905 6 9.28164 5.14112 9.05001 4H0V3H9.05001ZM4.5 7C3.67157 7 3 7.67157 3 8.5C3 9.32843 3.67157 10 4.5 10C5.32843 10 6 9.32843 6 8.5C6 7.67157 5.32843 7 4.5 7ZM2.05001 8C2.28164 6.85888 3.29052 6 4.5 6C5.70948 6 6.71836 6.85888 6.94999 8H16V9H6.94999C6.71836 10.1411 5.70948 11 4.5 11C3.29052 11 2.28164 10.1411 2.05001 9H0V8H2.05001ZM11.5 12C10.6716 12 10 12.6716 10 13.5C10 14.3284 10.6716 15 11.5 15C12.3284 15 13 14.3284 13 13.5C13 12.6716 12.3284 12 11.5 12ZM9.05001 13C9.28164 11.8589 10.2905 11 11.5 11C12.7095 11 13.7184 11.8589 13.95 13H16V14H13.95C13.7184 15.1411 12.7095 16 11.5 16C10.2905 16 9.28164 15.1411 9.05001 14H0V13H9.05001Z"
              fill="#5D5353"
            />
          </svg>
        </div>
        <div className="flex justify-between gap-4">
          <div className="">
            <Link to={"/favoris"} className="flex">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.44 13.1C24.63 13.1 23.01 13.98 22 15.33C20.99 13.98 19.37 13.1 17.56 13.1C14.49 13.1 12 15.6 12 18.69C12 19.88 12.19 20.98 12.52 22C14.1 27 18.97 29.99 21.38 30.81C21.72 30.93 22.28 30.93 22.62 30.81C25.03 29.99 29.9 27 31.48 22C31.81 20.98 32 19.88 32 18.69C32 15.6 29.51 13.1 26.44 13.1Z" fill="#596780"/>
<rect opacity="0.8" x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#C3D4E9" stroke-opacity="0.4"/>
</svg>

              
            </Link>
          </div>
          <div className="">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3399 24.49L28.3399 22.83C28.1299 22.46 27.9399 21.76 27.9399 21.35V18.82C27.9399 16.47 26.5599 14.44 24.5699 13.49C24.0499 12.57 23.0899 12 21.9899 12C20.8999 12 19.9199 12.59 19.3999 13.52C17.4499 14.49 16.0999 16.5 16.0999 18.82V21.35C16.0999 21.76 15.9099 22.46 15.6999 22.82L14.6899 24.49C14.2899 25.16 14.1999 25.9 14.4499 26.58C14.6899 27.25 15.2599 27.77 15.9999 28.02C17.9399 28.68 19.9799 29 22.0199 29C24.0599 29 26.0999 28.68 28.0399 28.03C28.7399 27.8 29.2799 27.27 29.5399 26.58C29.7999 25.89 29.7299 25.13 29.3399 24.49Z"
                fill="#596780"
              />
              <path
                d="M24.8299 30.01C24.4099 31.17 23.2999 32 21.9999 32C21.2099 32 20.4299 31.68 19.8799 31.11C19.5599 30.81 19.3199 30.41 19.1799 30C19.3099 30.02 19.4399 30.03 19.5799 30.05C19.8099 30.08 20.0499 30.11 20.2899 30.13C20.8599 30.18 21.4399 30.21 22.0199 30.21C22.5899 30.21 23.1599 30.18 23.7199 30.13C23.9299 30.11 24.1399 30.1 24.3399 30.07C24.4999 30.05 24.6599 30.03 24.8299 30.01Z"
                fill="#596780"
              />
              <rect
                opacity="0.8"
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="#C3D4E9"
                stroke-opacity="0.4"
              />
              <circle cx="36.5" cy="7.5" r="5.5" fill="#FF4423" />
            </svg>
          </div>
          <div className="">
  <Link to={"/login"}>
    <button className="flex items-center justify-center gap-2 border border-gray-300 p-2 px-3 rounded-br-xl rounded-tl-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-sm hover:translate-x-1">
      <span>Login</span>
      <svg 
        width="18" 
        height="18" 
        viewBox="0 0 18 18" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M11.25 14.0625C11.25 14.3732 10.9982 14.625 10.6875 14.625L1.6875 14.625C1.37684 14.625 1.125 14.3732 1.125 14.0625L1.125 3.9375C1.125 3.62684 1.37684 3.375 1.6875 3.375L10.6875 3.375C10.9982 3.375 11.25 3.62684 11.25 3.9375L11.25 6.1875C11.25 6.49816 11.5018 6.75 11.8125 6.75C12.1232 6.75 12.375 6.49816 12.375 6.1875L12.375 3.9375C12.375 3.00552 11.6195 2.25 10.6875 2.25L1.6875 2.25C0.755521 2.25 5.57079e-07 3.00552 5.16341e-07 3.9375L7.3763e-08 14.0625C3.30248e-08 14.9945 0.755519 15.75 1.6875 15.75L10.6875 15.75C11.6195 15.75 12.375 14.9945 12.375 14.0625L12.375 11.8125C12.375 11.5018 12.1232 11.25 11.8125 11.25C11.5018 11.25 11.25 11.5018 11.25 11.8125L11.25 14.0625Z" 
          fill="currentColor"
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M17.8352 9.39775C18.0549 9.17808 18.0549 8.82192 17.8352 8.60225L14.4602 5.22725C14.2406 5.00758 13.8844 5.00758 13.6648 5.22725C13.4451 5.44692 13.4451 5.80308 13.6648 6.02275L16.0795 8.4375L6.1875 8.4375C5.87684 8.4375 5.625 8.68934 5.625 9C5.625 9.31066 5.87684 9.5625 6.1875 9.5625L16.0795 9.5625L13.6648 11.9773C13.4451 12.1969 13.4451 12.5531 13.6648 12.7727C13.8844 12.9924 14.2406 12.9924 14.4602 12.7727L17.8352 9.39775Z" 
          fill="currentColor"
        />
      </svg>
    </button>
  </Link>
</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
