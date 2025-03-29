import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { button } from "framer-motion/client";

function FAQ() {
    const [ispoen,setisopen]=useState(false);
    const [ispoen1,setisopen1]=useState(false);
    const [ispoen2,setisopen2]=useState(false);
    const [ispoen3,setisopen3]=useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white">
      <Navbar />
      </div>
      <div className="flex-col space-y-4 mb-4 ">
        <div className="flex justify-center text-2xl font-serif capitalize mt-3">questions fréquemment posées </div>
        <div className="flex-col bg-white border border-gray-100 rounded-xl shadow-xl mx-20 mt-2.5 ">
          <div className="flex justify-between items-center mx-20">
            <div className="text-xl font-semibold flex items-center justify-center space-x-4">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9529 8.17926C15.3743 8.62372 15.3743 9.37626 14.9529 9.82072L8.18392 16.9598C7.54525 17.6334 6.49998 17.124 6.49998 16.1391V12.9375H5.49998C4.94769 12.9375 4.49998 12.4338 4.49998 11.8125V6.18749C4.49998 5.56617 4.94769 5.06249 5.49998 5.06249H6.49998V1.86087C6.49998 0.876004 7.54525 0.366551 8.18392 1.04014L14.9529 8.17926ZM7.49998 16.1391L14.2689 8.99999L7.49998 1.86087V5.06249C7.49998 5.68381 7.05226 6.18749 6.49998 6.18749H5.49998V11.8125H6.49998C7.05226 11.8125 7.49998 12.3162 7.49998 12.9375L7.49998 16.1391Z"
                  fill="#0000FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 5.0625C3.05228 5.0625 3.5 5.56618 3.5 6.1875V11.8125C3.5 12.4338 3.05228 12.9375 2.5 12.9375H1.5C0.947715 12.9375 0.5 12.4338 0.5 11.8125V6.1875C0.5 5.56618 0.947716 5.0625 1.5 5.0625H2.5ZM2.5 11.8125V6.1875H1.5V11.8125H2.5Z"
                  fill="#0000FF"
                />
              </svg>
              &nbsp; Quels types de voitures proposez-vous à la location ?
            </div>
           <div className="">
            {ispoen ? 
           <button onClick={()=>setisopen(false)}>
 <div className="mt-3">
 <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25.6546" cy="26.2516" r="25.3309" fill="#4A3AFF"/>
<path d="M17.3979 23.142L25.6545 31.3612L33.9111 23.142" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
           </button> 
        
    : <button onClick={()=>setisopen(true)}>
        <div className="mt-3">
        <svg
                width="83"
                height="84"
                viewBox="0 0 83 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1201_6856)">
                  <circle cx="41.6545" cy="37.1838" r="25.3309" fill="white" />
                </g>
                <path
                  d="M38.5448 45.4403L46.7641 37.1837L38.5448 28.9271"
                  stroke="#4A3AFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_1201_6856"
                    x="0.323608"
                    y="0.852905"
                    width="82.6617"
                    height="82.6617"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1201_6856"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1201_6856"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
        
        </div>
        </button>}
           </div>
          </div>
         {ispoen ?  <div className="mx-40 flex items-center justify-center mb-4">
            Nous proposons une large gamme de voitures, incluant des modèles
            économiques, des SUV, des voitures de luxe, et des monospaces
            adaptés à vos besoins.
          </div>:''}
        </div>

        <div className="flex-col bg-white border border-gray-100 rounded-xl shadow-xl mx-20 ">
          <div className="flex justify-between items-center mx-20">
            <div className="text-xl font-semibold flex justify-between items-center">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9529 8.17926C15.3743 8.62372 15.3743 9.37626 14.9529 9.82072L8.18392 16.9598C7.54525 17.6334 6.49998 17.124 6.49998 16.1391V12.9375H5.49998C4.94769 12.9375 4.49998 12.4338 4.49998 11.8125V6.18749C4.49998 5.56617 4.94769 5.06249 5.49998 5.06249H6.49998V1.86087C6.49998 0.876004 7.54525 0.366551 8.18392 1.04014L14.9529 8.17926ZM7.49998 16.1391L14.2689 8.99999L7.49998 1.86087V5.06249C7.49998 5.68381 7.05226 6.18749 6.49998 6.18749H5.49998V11.8125H6.49998C7.05226 11.8125 7.49998 12.3162 7.49998 12.9375L7.49998 16.1391Z"
                  fill="#0000FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 5.0625C3.05228 5.0625 3.5 5.56618 3.5 6.1875V11.8125C3.5 12.4338 3.05228 12.9375 2.5 12.9375H1.5C0.947715 12.9375 0.5 12.4338 0.5 11.8125V6.1875C0.5 5.56618 0.947716 5.0625 1.5 5.0625H2.5ZM2.5 11.8125V6.1875H1.5V11.8125H2.5Z"
                  fill="#0000FF"
                />
              </svg>
              &nbsp; Comment réserver une voiture ?
            </div>
            <div className="">
                
            {ispoen1 ? 
           <button onClick={()=>setisopen1(false)}>
 <div className="mt-3">
 <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25.6546" cy="26.2516" r="25.3309" fill="#4A3AFF"/>
<path d="M17.3979 23.142L25.6545 31.3612L33.9111 23.142" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
           </button> 
        
    : <button onClick={()=>setisopen1(true)}>
        <div className="mt-3">
        <svg
                width="83"
                height="84"
                viewBox="0 0 83 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1201_6856)">
                  <circle cx="41.6545" cy="37.1838" r="25.3309" fill="white" />
                </g>
                <path
                  d="M38.5448 45.4403L46.7641 37.1837L38.5448 28.9271"
                  stroke="#4A3AFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_1201_6856"
                    x="0.323608"
                    y="0.852905"
                    width="82.6617"
                    height="82.6617"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1201_6856"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1201_6856"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
        
        </div>
        </button>}
            </div>
          </div>
         {ispoen1 ?  <div className="mx-40 flex items-center justify-center mb-4">
            Vous pouvez réserver votre voiture en ligne sur notre site web en
            remplissant le formulaire de réservation. Vous aurez également
            besoin de fournir des informations comme votre nom, votre numéro de
            téléphone, ainsi que votre type de véhicule souhaité.
          </div> :''}
        </div>

        <div className="flex-col bg-white border border-gray-100 rounded-xl shadow-xl mx-20 ">
          <div className="flex justify-between items-center mx-20">
            <div className="text-xl font-semibold flex justify-center items-center">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9529 8.17926C15.3743 8.62372 15.3743 9.37626 14.9529 9.82072L8.18392 16.9598C7.54525 17.6334 6.49998 17.124 6.49998 16.1391V12.9375H5.49998C4.94769 12.9375 4.49998 12.4338 4.49998 11.8125V6.18749C4.49998 5.56617 4.94769 5.06249 5.49998 5.06249H6.49998V1.86087C6.49998 0.876004 7.54525 0.366551 8.18392 1.04014L14.9529 8.17926ZM7.49998 16.1391L14.2689 8.99999L7.49998 1.86087V5.06249C7.49998 5.68381 7.05226 6.18749 6.49998 6.18749H5.49998V11.8125H6.49998C7.05226 11.8125 7.49998 12.3162 7.49998 12.9375L7.49998 16.1391Z"
                  fill="#0000FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 5.0625C3.05228 5.0625 3.5 5.56618 3.5 6.1875V11.8125C3.5 12.4338 3.05228 12.9375 2.5 12.9375H1.5C0.947715 12.9375 0.5 12.4338 0.5 11.8125V6.1875C0.5 5.56618 0.947716 5.0625 1.5 5.0625H2.5ZM2.5 11.8125V6.1875H1.5V11.8125H2.5Z"
                  fill="#0000FF"
                />
              </svg>
              &nbsp; Quels sont les documents nécessaires pour louer une voiture
              ?
            </div>
            <div className="">
            {ispoen2 ? 
           <button onClick={()=>setisopen2(false)}>
 <div className="mt-3">
 <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25.6546" cy="26.2516" r="25.3309" fill="#4A3AFF"/>
<path d="M17.3979 23.142L25.6545 31.3612L33.9111 23.142" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
           </button> 
        
    : <button onClick={()=>setisopen2(true)}>
        <div className="mt-3">
        <svg
                width="83"
                height="84"
                viewBox="0 0 83 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1201_6856)">
                  <circle cx="41.6545" cy="37.1838" r="25.3309" fill="white" />
                </g>
                <path
                  d="M38.5448 45.4403L46.7641 37.1837L38.5448 28.9271"
                  stroke="#4A3AFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_1201_6856"
                    x="0.323608"
                    y="0.852905"
                    width="82.6617"
                    height="82.6617"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1201_6856"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1201_6856"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
        
        </div>
        </button>}
            </div>
          </div>
         {ispoen2?  <div className="mx-20 mb-4">
            Pour louer une voiture à Agadir, vous devez fournir :
            <ul className="list-disc mx-28">
              <li>
                Une pièce d’identité valide (passeport ou carte d’identité).
              </li>

              <li>
                Un permis de conduire valide (avec minimum 1 an d'expérience de
                conduite).
              </li>

              <li>Une carte bancaire pour le paiement. </li>
            </ul>
          </div>:''}
        </div>
        <div className="flex-col bg-white border border-gray-100 rounded-xl shadow-xl mx-20 ">
          <div className="flex justify-between items-center mx-20">
            <div className="text-xl font-semibold flex justify-center items-center">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9529 8.17926C15.3743 8.62372 15.3743 9.37626 14.9529 9.82072L8.18392 16.9598C7.54525 17.6334 6.49998 17.124 6.49998 16.1391V12.9375H5.49998C4.94769 12.9375 4.49998 12.4338 4.49998 11.8125V6.18749C4.49998 5.56617 4.94769 5.06249 5.49998 5.06249H6.49998V1.86087C6.49998 0.876004 7.54525 0.366551 8.18392 1.04014L14.9529 8.17926ZM7.49998 16.1391L14.2689 8.99999L7.49998 1.86087V5.06249C7.49998 5.68381 7.05226 6.18749 6.49998 6.18749H5.49998V11.8125H6.49998C7.05226 11.8125 7.49998 12.3162 7.49998 12.9375L7.49998 16.1391Z"
                  fill="#0000FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 5.0625C3.05228 5.0625 3.5 5.56618 3.5 6.1875V11.8125C3.5 12.4338 3.05228 12.9375 2.5 12.9375H1.5C0.947715 12.9375 0.5 12.4338 0.5 11.8125V6.1875C0.5 5.56618 0.947716 5.0625 1.5 5.0625H2.5ZM2.5 11.8125V6.1875H1.5V11.8125H2.5Z"
                  fill="#0000FF"
                />
              </svg>
              &nbsp; 
              Est-il possible de louer une voiture pour une période courte (journée) ?              ?
            </div>
            <div className="">
            {ispoen3 ? 
           <button onClick={()=>setisopen3(false)}>
 <div className="mt-3">
 <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25.6546" cy="26.2516" r="25.3309" fill="#4A3AFF"/>
<path d="M17.3979 23.142L25.6545 31.3612L33.9111 23.142" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
           </button> 
        
    : <button onClick={()=>setisopen3(true)}>
        <div className="mt-3">
        <svg
                width="83"
                height="84"
                viewBox="0 0 83 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1201_6856)">
                  <circle cx="41.6545" cy="37.1838" r="25.3309" fill="white" />
                </g>
                <path
                  d="M38.5448 45.4403L46.7641 37.1837L38.5448 28.9271"
                  stroke="#4A3AFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_1201_6856"
                    x="0.323608"
                    y="0.852905"
                    width="82.6617"
                    height="82.6617"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1201_6856"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1201_6856"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
        
        </div>
        </button>}
            </div>
          </div>
          {ispoen3 ? <div className="mx-40 mb-4">
          Oui, nous proposons des locations à la journée, ainsi que des locations à la semaine ou au mois, en fonction de vos besoins.
          </div>:''}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default FAQ;
