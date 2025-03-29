import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Customaxios from "../axios/Customaxios";
import { Link } from "react-router-dom";
import Footer from "./footer";
function Section3() {
  const [donne, setDonne] = useState([]);
  const [donne1, setDonne1] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [favorites, setfavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  
  const fetchdataWithaxios = async () => {
    const data = await Customaxios.get("voitures");
    const data1 = await Customaxios.get("infos");
    setDonne(data.data);
    setDonne1(data1.data);
  };
  useEffect(() => {
    fetchdataWithaxios();
  }, []);
  useEffect(() => {
    setCurrentPage(1); 
  }, [donne]);
  const toggleFavotite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];
    setfavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };
  const totalPages = Math.max(1, Math.ceil(donne.length / itemsPerPage));
const currentItems = donne.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage

  );
  return (
    <div className="">
      <Navbar favorites={favorites} />
      <div className="bg-gray-100 py-5">
        <div className="grid grid-cols-2 mx-10">
          <div className=" relative">
            <div className="flex w-[95%] absolute opacity-85">
              <svg
                width="640"
                height="360"
                viewBox="0 0 640 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_44_14921)">
                  <rect width="640" height="360" rx="10" fill="#54A6FF" />
                  <circle
                    cx="230"
                    cy="305"
                    r="25"
                    stroke="white"
                    stroke-opacity="0.06"
                    stroke-width="10"
                  />
                  <circle
                    cx="230"
                    cy="305"
                    r="75"
                    stroke="white"
                    stroke-opacity="0.06"
                    stroke-width="20"
                  />
                  <circle
                    cx="230.5"
                    cy="304.5"
                    r="137.5"
                    stroke="white"
                    stroke-opacity="0.06"
                    stroke-width="20"
                  />
                  <circle
                    cx="230"
                    cy="305"
                    r="200"
                    stroke="white"
                    stroke-opacity="0.06"
                    stroke-width="20"
                  />
                  <circle
                    cx="230.5"
                    cy="304.5"
                    r="262.5"
                    stroke="white"
                    stroke-opacity="0.06"
                    stroke-width="20"
                  />
                  <circle
                    cx="230"
                    cy="305"
                    r="325"
                    stroke="white"
                    stroke-opacity="0.06"
                    stroke-width="20"
                  />
                  <circle
                    cx="230.5"
                    cy="304.5"
                    r="387.5"
                    stroke="white"
                    stroke-opacity="0.06"
                    stroke-width="20"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_44_14921">
                    <rect width="640" height="360" rx="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex">
              <div className="absolute mx-10 top-14  font-serif capitalize font-bold text-2xl w-[50%]">
                <p>
                  La meilleure plateforme de location de{" "}
                  <span className="text-3xl text-white">Voitures</span>
                </p>
              </div>
              <div className="">
                <button className="absolute right-12 top-24 border border-gray-50 bg-white p-2 px-4 font-semibold rounded-br-xl rounded-tl-xl shadow-2xl shadow-black">
                  Rent Now
                </button>
              </div>
            </div>
            <div className="relative top-20 w-[90%] my-10">
              <img src="Images/image1.png" alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute flex w-[95%] mr-[-10px] opacity-85">
              <svg
                width="640"
                height="360"
                viewBox="0 0 640 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_44_14937)">
                  <rect width="640" height="360" rx="10" fill="#3563E9" />
                  <path
                    d="M-4 300L-29 240H-4H21L46 300L21 360H-4H-29L-4 300Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M87 300L62 240H87H112L137 300L112 360H87H62L87 300Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M178 300L153 240H178H203L228 300L203 360H178H153L178 300Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M269 300L244 240H269H294L319 300L294 360H269H244L269 300Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M360 300L335 240H360H385L410 300L385 360H360H335L360 300Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M451 300L426 240H451H476L501 300L476 360H451H426L451 300Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M542 300L517 240H542H567L592 300L567 360H542H517L542 300Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M633 300L608 240H633H658L683 300L658 360H633H608L633 300Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M41 180L16 120H41H66L91 180L66 240H41H16L41 180Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M132 180L107 120H132H157L182 180L157 240H132H107L132 180Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M223 180L198 120H223H248L273 180L248 240H223H198L223 180Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M314 180L289 120H314H339L364 180L339 240H314H289L314 180Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M405 180L380 120H405H430L455 180L430 240H405H380L405 180Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M496 180L471 120H496H521L546 180L521 240H496H471L496 180Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M587 180L562 120H587H612L637 180L612 240H587H562L587 180Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M-5 60L-30 0H-5H20L45 60L20 120H-5H-30L-5 60Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M86 60L61 0H86H111L136 60L111 120H86H61L86 60Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M177 60L152 0H177H202L227 60L202 120H177H152L177 60Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M268 60L243 0H268H293L318 60L293 120H268H243L268 60Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M359 60L334 0H359H384L409 60L384 120H359H334L359 60Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M450 60L425 0H450H475L500 60L475 120H450H425L450 60Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M541 60L516 0H541H566L591 60L566 120H541H516L541 60Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                  <path
                    d="M632 60L607 0H632H657L682 60L657 120H632H607L632 60Z"
                    fill="white"
                    fill-opacity="0.06"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_44_14937">
                    <rect width="640" height="360" rx="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex">
              <div className="">
                <button className="absolute left-4 top-24 border-transparent  bg-black text-white p-2 px-4 font-semibold rounded-br-xl rounded-tl-xl shadow-3xl shadow-white">
                  Rent Now
                </button>
              </div>
              <div className="absolute mx-10 top-14 right-3 font-serif capitalize font-bold text-2xl w-[50%] text-white">
                <p>
                  La meilleure plateforme de location de{" "}
                  <span className="text-3xl text-black">Voitures</span>
                </p>
              </div>
            </div>
            <div className="relative top-20 w-[90%] my-10">
              <img src="Images/image.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white border mt-20 border-gray-100 shadow-xl rounded-xl w-[92%] mx-10 h-auto block">
          <div className=" font-mono font-bold text-2xl mt-2 flex justify-center items-center space-x-2">
            <div className="">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="22"
                  height="20"
                  rx="10"
                  fill="#3563E9"
                  fill-opacity="0.3"
                />
                <circle cx="11" cy="10" r="4" fill="#3563E9" />
              </svg>
            </div>

            <div className="">
              <p>Pick-Up</p>
            </div>
          </div>
          <div className="mx-20 mt-5">
            <hr />
          </div>
          <div className="flex justify-around gap-4 mx-10 my-5">
            <div className="">
              <p className="text-xl font-semibold">Locations</p>
              <select
                name=""
                id=""
                className="border-transparent focus:ring-0 focus:ring-blue-400 p-2.5 border border-gray-300 rounded-xl px-4"
              >
                {donne1.map((item) => (
                  <>
                    <option value="">{item.locations}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="border border-l-3 h-auto"></div>
            <div className="">
              <p className="text-xl font-semibold">Date</p>
              <select
                name=""
                id=""
                className="border-transparent focus:ring-0 focus:ring-blue-500 focus:outline-none p-2.5"
              >
                {donne1.map((item) => (
                  <>
                    <option value=""> {item.Date}</option>
                  </>
                ))}
              </select>
            </div>
            <div className="border border-l-3 h-auto"></div>

            <div className="">
              <p className="text-xl font-semibold">Time</p>
              <select
                name=""
                id=""
                className="border-transparent focus:ring-0 focus:ring-blue-400 p-2.5"
              >
                {donne1.map((item) => (
                  <>
                    <option value="">{item.Time}</option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mx-10 mt-5">
          <p className="text-blue-700 font-serif text-2xl my-4">Popular Car</p>
          <div className="grid grid-cols-4 gap-5">
            {currentItems.map((item) => (
              <>
                <div className="bg-white p-2 border border-gray-100 rounded-xl shadow-xl">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="text-xl font-serif  font-semibold">
                        {item.title}
                      </p>
                      <p
                        className={`capitalize ${
                          item.status === "Disponible"
                            ? "text-emerald-400"
                            : "text-red-500"
                        }`}
                      >
                        {item.status}
                      </p>
                    </div>
                    <div className="">
                      <button onClick={() => toggleFavotite(item.id)}>
                        {favorites.includes(item.id) ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z"
                              fill="#ED3F3F"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                              stroke="#90A3BF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <img src={item.ImageP} alt="" />

                  <div className="flex justify-between text-sm my-auto">
                    <div className="flex">
                      <div className="">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z"
                            fill="#90A3BF"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <p>{item.consomation}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z"
                            fill="#90A3BF"
                          />
                          <rect
                            x="4"
                            y="4"
                            width="16"
                            height="16"
                            rx="8"
                            fill="white"
                          />
                          <path
                            d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z"
                            fill="#90A3BF"
                          />
                          <rect
                            x="8"
                            y="8"
                            width="8"
                            height="8"
                            rx="4"
                            fill="white"
                          />
                          <rect
                            x="11"
                            y="17"
                            width="2"
                            height="4"
                            fill="#90A3BF"
                          />
                          <rect
                            x="17"
                            y="11"
                            width="4"
                            height="2"
                            fill="#90A3BF"
                          />
                          <rect
                            x="3"
                            y="11"
                            width="4"
                            height="2"
                            fill="#90A3BF"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <p>{item.type}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M14.08 14.15C11.29 12.29 6.73996 12.29 3.92996 14.15C2.65996 15 1.95996 16.15 1.95996 17.38C1.95996 18.61 2.65996 19.75 3.91996 20.59C5.31996 21.53 7.15996 22 8.99996 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M19.9901 7.34001C20.1501 9.28001 18.7701 10.98 16.8601 11.21C16.8501 11.21 16.8501 11.21 16.8401 11.21H16.8101C16.7501 11.21 16.6901 11.21 16.6401 11.23C15.6701 11.28 14.7801 10.97 14.1101 10.4C15.1401 9.48001 15.7301 8.10001 15.6101 6.60001C15.5401 5.79001 15.2601 5.05001 14.8401 4.42001C15.2201 4.23001 15.6601 4.11001 16.1101 4.07001C18.0701 3.90001 19.8201 5.36001 19.9901 7.34001Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z"
                            fill="#90A3BF"
                          />
                        </svg>
                      </div>
                      <div className="">
                        <p>{item.dor} People</p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-between items-center mt-2">
                    <div className="">
                      <p className="">
                       
                        <span className="font-bold text-xl">
                          {item.prix_jour}
                        </span>
                        Dh <span className="text-gray-500 text-md">/Day</span>
                      </p>
                    </div>
                    <div className="">
                      <Link to={`/voiture/${item.id}`}>
                        <button className="border border-gray-50 bg-[#3563E9] p-2 px-4 rounded-lg text-white">
                          Rent Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                
              </>
            ))}
            
          </div>
        </div>
        <div className="flex justify-center items-center">
        <div className="flex justify-center items-center space-x-4 mt-6">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="px-4 py-2 bg-white  rounded-lg disabled:bg-white"
  >
    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1834 9.30294C12.3576 9.2327 12.5625 9.34701 12.5625 9.52884V11.2219C12.5625 11.6879 12.9822 12.0656 13.5 12.0656H25.3125V16.9594H13.5C12.9822 16.9594 12.5625 17.3371 12.5625 17.8031V19.4962C12.5625 19.678 12.3576 19.7923 12.1834 19.7221L4.71424 14.773C4.68854 14.7559 4.66189 14.7401 4.63439 14.7255C4.45522 14.6305 4.45522 14.3945 4.63439 14.2995C4.66189 14.2849 4.68854 14.2691 4.71424 14.252L12.1834 9.30294ZM14.4375 9.52884C14.4375 8.0178 12.6199 7.11088 11.2037 7.86199C11.1762 7.87657 11.1496 7.89241 11.1239 7.90944L3.63606 12.8709C2.288 13.6255 2.288 15.3995 3.63606 16.1541L11.1239 21.1156C11.1496 21.1326 11.1762 21.1484 11.2037 21.163C12.6199 21.9141 14.4375 21.0072 14.4375 19.4962V18.6469H26.25C26.7678 18.6469 27.1875 18.2691 27.1875 17.8031V11.2219C27.1875 10.7559 26.7678 10.3781 26.25 10.3781H14.4375V9.52884Z" fill="#0000FF"/>
</svg>

  </button>

  <span className="text-xl font-semibold">
    {currentPage} / {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage >= totalPages}
    className="px-4 py-2 bg-white rounded-lg disabled:bg-white"
  >
    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8166 9.30294C17.6424 9.2327 17.4375 9.34701 17.4375 9.52884V11.2219C17.4375 11.6879 17.0178 12.0656 16.5 12.0656H4.6875V16.9594H16.5C17.0178 16.9594 17.4375 17.3371 17.4375 17.8031V19.4962C17.4375 19.678 17.6424 19.7923 17.8166 19.7221L25.2858 14.773C25.3115 14.7559 25.3381 14.7401 25.3656 14.7255C25.5448 14.6305 25.5448 14.3945 25.3656 14.2995C25.3381 14.2849 25.3115 14.2691 25.2858 14.252L17.8166 9.30294ZM15.5625 9.52884C15.5625 8.0178 17.3801 7.11088 18.7963 7.86199C18.8238 7.87657 18.8504 7.89241 18.8761 7.90944L26.3639 12.8709C27.712 13.6255 27.712 15.3995 26.3639 16.1541L18.8761 21.1156C18.8504 21.1326 18.8238 21.1484 18.7963 21.163C17.3801 21.9141 15.5625 21.0072 15.5625 19.4962V18.6469H3.75C3.23223 18.6469 2.8125 18.2691 2.8125 17.8031V11.2219C2.8125 10.7559 3.23223 10.3781 3.75 10.3781H15.5625V9.52884Z" fill="#0000FF"/>
</svg>


  </button>
</div>

        </div>
      <Footer/>
      </div>
    </div>
  );
}

export default Section3;
