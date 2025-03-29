import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 h-auto">
        <div className="relative h-[60vh] w-full">
          {/* Image d'arrière-plan */}
          <img
            src="https://www.horentcar.com/assets/images/location-voiture-casablanca.jpg"
            alt="Car Rental"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay pour assombrir légèrement l'image */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Contenu centré */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg max-w-2xl leading-relaxed">
              From booking to return, we offer seamless, reliable, and flexible
              car rentals for a hassle-free journey in Agadir. <br /> Welcome to{" "}
              <span className="font-semibold">AgaCar</span>.
            </p>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex justify-center text-2xl p-2 font-semibold capitalize font-serif mt-2">
            Fournir des locations fiables pour un voyage fluide et agréable.
          </div>
          <div className="flex justify-center mt-3">
            <svg
              width="284"
              height="40"
              viewBox="0 0 284 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_101_1372)">
                <path
                  d="M181.034 0.697709C160.838 1.32266 140.654 2.37085 120.504 3.84229C102.218 4.16634 83.9294 4.49039 65.6439 4.81443C45.5794 5.17155 25.5149 5.52535 5.45374 5.88247C3.51277 5.91553 0.507061 7.34068 0.209467 9.49328C-0.117887 11.8674 2.81838 12.2642 4.47168 12.2378C17.5096 12.0063 30.5476 11.7748 43.5855 11.5434C38.1594 12.2345 32.7398 12.952 27.3203 13.7026C25.4422 13.9638 22.82 14.8434 22.2215 16.8968C21.6859 18.7286 23.359 20.0281 25.1347 20.0612C55.2446 20.577 85.3579 21.0962 115.468 21.612C121.876 21.7211 128.284 21.8335 134.692 21.9426C125.474 22.9512 116.268 24.1118 107.089 25.4245C92.6952 27.4878 78.3611 29.9347 64.0898 32.7222C62.5489 33.0231 60.3632 34.3722 60.1285 36.1015C59.9003 37.7548 61.7222 38.8361 63.1838 38.8493C97.427 39.1469 131.67 39.4478 165.913 39.7454C175.569 39.8281 185.221 39.914 194.876 39.9967C197.088 40.0165 199.925 39.385 201.039 37.2126C202.035 35.2683 200.17 33.6513 198.269 33.6348C165.305 33.3471 132.341 33.0595 99.3779 32.7718C100.297 32.6329 101.213 32.4907 102.132 32.3551C114.588 30.5101 127.087 28.946 139.613 27.6664C164.677 25.1071 189.853 23.6819 215.046 23.4009C216.161 23.3876 217.288 23.381 218.412 23.3744C231.182 23.5926 243.949 23.8142 256.719 24.0324C258.928 24.0688 261.775 23.4075 262.883 21.2483C263.901 19.2643 261.997 17.7466 260.112 17.6705C247.081 17.1481 234.036 16.9232 220.995 16.9993C203.923 16.705 186.851 16.414 169.779 16.1197C139.669 15.6039 109.556 15.0847 79.4456 14.5689C77.0186 14.5259 74.5882 14.4863 72.1612 14.4433C87.9271 12.7668 103.719 11.3483 119.532 10.1943C152.495 9.60901 185.462 9.02705 218.426 8.44178C238.49 8.08467 258.555 7.73086 278.616 7.37374C280.457 7.34068 283.162 6.07756 283.714 4.17956C284.257 2.32456 282.57 1.08127 280.801 1.01514C247.56 -0.221528 214.279 -0.330646 181.034 0.697709Z"
                  fill="#3A50E0"
                  fill-opacity="0.88"
                />
              </g>
              <defs>
                <clipPath id="clip0_101_1372">
                  <rect
                    width="283.634"
                    height="40"
                    fill="white"
                    transform="translate(0.183014)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 relative mx-20 mt-5">
          <div className="flex-col">
            <div className="font-semibold text-2xl font-serif">
              Notre Mission
            </div>
            <div className="text-xl my-2">
              Chez Agacar, notre mission est simple : offrir à nos clients des
              solutions de location de voitures flexibles, fiables et adaptées à
              leurs besoins spécifiques. Nous nous engageons à rendre chaque
              expérience de location facile, accessible et agréable, que vous
              soyez en voyage d’affaires, en vacances ou simplement en
              déplacement dans la ville
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-full">
              <svg
                width="293"
                height="243"
                className="mx-40"
                viewBox="0 0 293 243"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M152.387 0.00160996C198.503 -0.136245 247.549 8.54421 275.133 39.447C301.965 69.5063 293.355 109.731 282.893 146.206C272.629 181.996 258.412 220.57 218.657 236.366C179.067 252.097 134.414 236.978 95.0594 220.841C56.1777 204.898 18.4743 183.921 6.11789 149.215C-7.16109 111.918 1.23486 70.2736 30.7372 40.1776C59.8156 10.514 106.518 0.138728 152.387 0.00160996Z"
                  fill="#3A50E0"
                  fill-opacity="0.88"
                />
              </svg>

              <img
                src="Images/image.png"
                alt=""
                className="absolute top-10 h-[150px] right-1 "
              />
              <div className="absolute top-4 left-48">
                <svg
                  width="66"
                  height="80"
                  viewBox="0 0 66 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_101_1346)">
                    <path
                      d="M39.5685 31.6771C46.5414 28.7265 53.5143 25.7759 60.4871 22.8114C60.8907 23.6882 61.3083 24.5511 61.7119 25.428C55.2679 32.7209 43.8274 31.7467 36.4092 39.5685C46.1795 45.2888 55.6576 50.8281 65.1357 56.3813C64.7878 57.0633 64.4259 57.7453 64.0779 58.4134C53.7787 56.7293 45.9569 49.2693 35.1844 44.1475C37.9958 56.4649 40.4871 67.4461 42.9923 78.4273C42.4356 78.9562 41.865 79.485 41.3083 80C39.6938 78.3994 37.0772 77.0216 36.6319 75.1427C34.9896 68.2672 34.0988 61.2109 32.8601 54.238C32.4704 52.0668 31.872 49.9374 31.3709 47.794C30.675 47.6409 29.9791 47.4878 29.2832 47.3347C25.8455 56.2978 22.4078 65.2749 18.9005 74.4607C14.753 70.3271 16.437 64.0501 26.6945 43.9944C17.4948 46.7919 9.11621 49.3528 0.72373 51.9137C0.473208 51.2317 0.236604 50.5358 0 49.8539C8.87961 46.2074 17.7731 42.5609 28.3507 38.2185C20.9603 33.1524 14.7669 28.8935 8.57342 24.6486C8.92136 24.064 9.26931 23.4795 9.61726 22.8949C15.5602 25.929 21.5031 28.9631 28.3368 32.4565C26.8198 21.364 25.3862 10.9255 23.9666 0.473208C24.8295 0.320111 25.7063 0.167015 26.5692 0C28.5177 9.65901 30.4523 19.318 32.4008 28.977C32.874 29.2276 33.3333 29.4642 33.8065 29.7147C37.9541 21.3083 42.1016 12.9019 46.263 4.48156C47.0285 4.84342 47.794 5.19137 48.5595 5.55324C45.1496 13.8205 41.7397 22.0877 38.3299 30.3549C38.2324 30.8977 38.135 31.4266 38.0376 31.9555C38.5386 31.858 39.0536 31.7606 39.5685 31.6771Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_101_1346">
                      <rect width="65.1357" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 relative mx-20 mt-5">
          
          <div className="relative">
            <div className="absolute w-full">
              <svg
                width="293"
                height="243"
                className=""
                viewBox="0 0 293 243"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M152.387 0.00160996C198.503 -0.136245 247.549 8.54421 275.133 39.447C301.965 69.5063 293.355 109.731 282.893 146.206C272.629 181.996 258.412 220.57 218.657 236.366C179.067 252.097 134.414 236.978 95.0594 220.841C56.1777 204.898 18.4743 183.921 6.11789 149.215C-7.16109 111.918 1.23486 70.2736 30.7372 40.1776C59.8156 10.514 106.518 0.138728 152.387 0.00160996Z"
                  fill="#3A50E0"
                  fill-opacity="0.88"
                />
              </svg>

              <img
                src="Images/logm.png"
                alt=""
                className="absolute top-1 left-10 h-[250px] "
              />
              <div className="absolute top-10 left-5">
                <svg
                  width="66"
                  height="80"
                  viewBox="0 0 66 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_101_1346)">
                    <path
                      d="M39.5685 31.6771C46.5414 28.7265 53.5143 25.7759 60.4871 22.8114C60.8907 23.6882 61.3083 24.5511 61.7119 25.428C55.2679 32.7209 43.8274 31.7467 36.4092 39.5685C46.1795 45.2888 55.6576 50.8281 65.1357 56.3813C64.7878 57.0633 64.4259 57.7453 64.0779 58.4134C53.7787 56.7293 45.9569 49.2693 35.1844 44.1475C37.9958 56.4649 40.4871 67.4461 42.9923 78.4273C42.4356 78.9562 41.865 79.485 41.3083 80C39.6938 78.3994 37.0772 77.0216 36.6319 75.1427C34.9896 68.2672 34.0988 61.2109 32.8601 54.238C32.4704 52.0668 31.872 49.9374 31.3709 47.794C30.675 47.6409 29.9791 47.4878 29.2832 47.3347C25.8455 56.2978 22.4078 65.2749 18.9005 74.4607C14.753 70.3271 16.437 64.0501 26.6945 43.9944C17.4948 46.7919 9.11621 49.3528 0.72373 51.9137C0.473208 51.2317 0.236604 50.5358 0 49.8539C8.87961 46.2074 17.7731 42.5609 28.3507 38.2185C20.9603 33.1524 14.7669 28.8935 8.57342 24.6486C8.92136 24.064 9.26931 23.4795 9.61726 22.8949C15.5602 25.929 21.5031 28.9631 28.3368 32.4565C26.8198 21.364 25.3862 10.9255 23.9666 0.473208C24.8295 0.320111 25.7063 0.167015 26.5692 0C28.5177 9.65901 30.4523 19.318 32.4008 28.977C32.874 29.2276 33.3333 29.4642 33.8065 29.7147C37.9541 21.3083 42.1016 12.9019 46.263 4.48156C47.0285 4.84342 47.794 5.19137 48.5595 5.55324C45.1496 13.8205 41.7397 22.0877 38.3299 30.3549C38.2324 30.8977 38.135 31.4266 38.0376 31.9555C38.5386 31.858 39.0536 31.7606 39.5685 31.6771Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_101_1346">
                      <rect width="65.1357" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-col mt-3">
            <div className="font-semibold text-2xl font-serif">
            Pourquoi Choisir Agacar ?
            </div>
            <div className="text-xl my-2">
            Choisir Agacar, c'est opter pour une agence fiable, transparente et à l’écoute de ses clients. Nous nous efforçons de vous fournir un service impeccable, une expérience de location sans tracas et des véhicules qui répondent à toutes vos attentes. Laissez-nous prendre en charge vos besoins en matière de transport, pour que vous puissiez profiter pleinement de votre voyage.
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  );
}

export default About;
