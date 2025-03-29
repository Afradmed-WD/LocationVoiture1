import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 h-auto mb-5">
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl p-5">
          {/* Image avec titre superposé */}
          <div className="border border-gray-300 rounded-xl bg-white shadow-lg overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dm9pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Blog Cover"
              className="w-full h-[45vh] object-cover"
            />
            {/* Overlay + Titre */}
            <div className="absolute inset-1 flex items-center justify-center bg-black/40">
              <h1 className="text-white font-bold text-4xl">Blog</h1>
            </div>
           
          </div>
        </div>
      </div>
      <div className="mx-20 mt-2">
        <div className="flex items-center text-2xl font-semibold text-[#0000FF]">
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5139 20.8078C10.7823 21.0641 11.2177 21.0641 11.4861 20.8078L14.0348 18.375H19.25C20.7688 18.375 22 17.1997 22 15.75V3.9375C22 2.48775 20.7688 1.3125 19.25 1.3125H2.75C1.23122 1.3125 0 2.48775 0 3.9375V15.75C0 17.1997 1.23122 18.375 2.75 18.375H7.96523L10.5139 20.8078ZM1.375 11.8125V7.875H20.625V11.8125H1.375ZM20.625 13.125V15.75C20.625 16.4749 20.0094 17.0625 19.25 17.0625H14.0348C13.6701 17.0625 13.3204 17.2008 13.0625 17.4469L11 19.4157L8.9375 17.4469C8.67964 17.2008 8.3299 17.0625 7.96523 17.0625H2.75C1.99061 17.0625 1.375 16.4749 1.375 15.75V13.125H20.625ZM20.625 6.5625H1.375V3.9375C1.375 3.21263 1.99061 2.625 2.75 2.625H19.25C20.0094 2.625 20.625 3.21263 20.625 3.9375V6.5625ZM2.75 15.0938C2.75 15.4562 3.0578 15.75 3.4375 15.75H14.4375C14.8172 15.75 15.125 15.4562 15.125 15.0938C15.125 14.7313 14.8172 14.4375 14.4375 14.4375H3.4375C3.0578 14.4375 2.75 14.7313 2.75 15.0938ZM2.75 9.84375C2.75 10.2062 3.0578 10.5 3.4375 10.5H18.5625C18.9422 10.5 19.25 10.2062 19.25 9.84375C19.25 9.48131 18.9422 9.1875 18.5625 9.1875H3.4375C3.0578 9.1875 2.75 9.48131 2.75 9.84375ZM2.75 4.59375C2.75 4.95619 3.0578 5.25 3.4375 5.25H11.6875C12.0672 5.25 12.375 4.95619 12.375 4.59375C12.375 4.23131 12.0672 3.9375 11.6875 3.9375H3.4375C3.0578 3.9375 2.75 4.23131 2.75 4.59375Z" fill="#0000FF"/>
            </svg> &nbsp;
            Description
        </div>
        <div className="my-5 text-lg">
        Notre agence de location de voitures met à votre disposition une large gamme de véhicules adaptés à tous vos besoins : voitures économiques, familiales, SUV, et voitures de luxe. Que vous soyez en voyage d'affaires ou en vacances, nous vous garantissons des véhicules bien entretenus, un service client réactif et des tarifs compétitifs. Avec des options de réservation flexibles et la possibilité de livraison à l’aéroport ou à votre hôtel, nous facilitons votre expérience de location pour un séjour agréable et sans souci
        </div>
        <div className="flex-col my-5">
            <div className="flex-col space-y-3">
                <div className="font-semibold text-xl">
                1. Comment Choisir la Voiture Idéale pour Votre Séjour à Agadir ?

                </div>
                <div className="">
                                Vous planifiez un voyage à Agadir et vous ne savez pas quel type de voiture choisir ? Découvrez nos conseils pour sélectionner le véhicule qui correspond à vos besoins et à votre budget.
                </div>
                <div className="font-semibold text-xl">
                2. Les Meilleurs Itinéraires à Explorer en Voiture depuis Agadir

                </div>
                <div className="">
                Agadir est entourée de paysages magnifiques ! Découvrez les meilleures routes à emprunter pour visiter des endroits incontournables comme Taghazout, la Vallée du Paradis et Taroudant.                </div>
                <div className="font-semibold text-xl">
                3. Location de Voiture à Agadir : Ce qu’il Faut Savoir Avant de Réserver
                </div>
                <div className="">
                Agadir est entourée de paysages magnifiques ! Découvrez les meilleures routes à emprunter pour visiter des endroits incontournables comme Taghazout, la Vallée du Paradis et Taroudant.                </div>
            </div>
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  );
}

export default Blog;
