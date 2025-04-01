import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

function Favoris() {
  const [products, setProducts] = useState([]);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/voitures?start=1&_limit=6")
      .then(res => res.json())
      .then(data => setProducts(data.filter(p => favorites.includes(p.id))));
  }, []);

  return (
    <div>
        <Navbar/>
      {products.length === 0 ? <p className="text-center my-20 font-serif text-2xl">Aucun favori</p> : (
        <div className="flex-col items-center justify-center ">
          {products.map(p => (
            <>
           <div className="flex  justify-around items-center shadow-sm">
           <div key={p.id} className="">
              <img src={p.ImageP} className="h-32 mx-auto"/>
            </div>
           
            <div className="flex">
            
            <p className="text-2xl font-serif">{p.title}</p>     
            </div>
            <div className="flex">
            
            <p className="text-2xl font-serif">{p.type}</p>     
            </div>
            <div className="flex">
            
            <p className="text-2xl font-serif">{p.prix_jour} Dh</p>
            </div>
           <div className="">
           <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.125 9.28125C13.125 8.81526 13.5447 8.4375 14.0625 8.4375C14.5803 8.4375 15 8.81526 15 9.28125V11.8125H17.8125C18.3303 11.8125 18.75 12.1903 18.75 12.6562C18.75 13.1222 18.3303 13.5 17.8125 13.5H15V16.0312C15 16.4972 14.5803 16.875 14.0625 16.875C13.5447 16.875 13.125 16.4972 13.125 16.0312V13.5H10.3125C9.79473 13.5 9.375 13.1222 9.375 12.6562C9.375 12.1903 9.79473 11.8125 10.3125 11.8125H13.125V9.28125Z" fill="#2C2CF7" fill-opacity="0.89"/>
<path d="M29.0625 1.6875C29.5803 1.6875 30 2.06526 30 2.53125C30 2.99724 29.5803 3.375 29.0625 3.375H26.982L26.2288 6.08648L23.4214 19.5617C23.3383 19.9608 22.9511 20.25 22.5 20.25H20.625C22.6961 20.25 24.375 21.761 24.375 23.625C24.375 25.489 22.6961 27 20.625 27C18.5539 27 16.875 25.489 16.875 23.625C16.875 21.761 18.5539 20.25 20.625 20.25H7.5C9.57107 20.25 11.25 21.761 11.25 23.625C11.25 25.489 9.57107 27 7.5 27C5.42893 27 3.75 25.489 3.75 23.625C3.75 21.761 5.42893 20.25 7.5 20.25H5.625C5.17386 20.25 4.7867 19.9608 4.70356 19.5617L1.89106 6.06174C1.83966 5.81504 1.91297 5.56055 2.09108 5.3674C2.26919 5.17425 2.53361 5.0625 2.8125 5.0625H24.5805L25.3405 2.32661C25.4448 1.951 25.8198 1.6875 26.25 1.6875H29.0625ZM21.7219 18.5625L24.1829 6.75H3.94212L6.40305 18.5625H21.7219ZM18.75 23.625C18.75 24.557 19.5895 25.3125 20.625 25.3125C21.6605 25.3125 22.5 24.557 22.5 23.625C22.5 22.693 21.6605 21.9375 20.625 21.9375C19.5895 21.9375 18.75 22.693 18.75 23.625ZM5.625 23.625C5.625 24.557 6.46446 25.3125 7.5 25.3125C8.53553 25.3125 9.375 24.557 9.375 23.625C9.375 22.693 8.53553 21.9375 7.5 21.9375C6.46446 21.9375 5.625 22.693 5.625 23.625Z" fill="#2C2CF7" fill-opacity="0.89"/>
</svg>

           </div>
           </div>
           <hr />
            </>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Favoris;
