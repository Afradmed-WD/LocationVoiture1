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
        <div className="flex-col items-center justify-center">
          {products.map(p => (
            <>
           <div className="flex  justify-around items-center">
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
            <div className="border border-gray-50 rounded-xl p-2 bg-blue-600 font-serif text-white ">
              Reserver
            </div>
           </div>
            </>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Favoris;
