"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function Home() {
  const Proyectos = [
    {
      Image: "",
    },
    {
      Image: "",
    },
    {
      Image: "",
    },
  ];
  return (
    <main className="w-screen h-screen overflow-auto">
      <section className="  bg-[#3f85f5]">
        <header className="container mx-auto max-w-7xl p-5">
          <Image
            src={"/Recursos/Logo.png"}
            alt="Logo"
            width={200}
            height={90}
            style={{
              objectFit: "cover",
            }}
          />
        </header>
      </section>
      <div className="bg-[#ffffff] container mx-auto  overflow-hidden p-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center items-center">
          <div className="w-full h-full ">
            <figure className="relative w-[17rem] h-[10rem] sm:w-full sm:h-[18rem] lg:w-[40rem] lg:h-[24rem]  ">
              <Image
                fill
                src={"/Recursos/Titulo.png"}
                alt="Titulo"
                style={{
                  objectFit: "contain",
                }}
              />
            </figure>

            <Link href={"/consultapromojulio2024"}>
              <Image
                className="pt-4 lg:ml-10 mx-auto lg:mx-0 "
                width={350}
                height={120}
                src={"/Recursos/Button.png"}
                alt="Titulo"
                style={{
                  objectFit: "cover",
                }}
              />
            </Link>
          </div>
          <Carousel
            infiniteLoop
            autoPlay
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            className="lg:-ml-[102px]"
          >
            <div className=" ">
              <img
                src={"/Recursos/Hombre1.png"}
                alt="Hombre1.png"
                style={{
                  objectFit: "contain",
                }}
                className="w-full h-[250px] lg:h-[500px]   "
              />
            </div>

            <div>
              <img
                className="w-full h-[250px] lg:h-[500px]   "
                src={"/Recursos/Mujer2.png"}
                alt="Hombre1.png"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="grid place-items-center mx-auto p-20 sm:my-auto bg-[#3f85f5] rounded-3xl space-y-10">
        <div className="flex items-center justify-center space-x-3">
          <a
            href="https://www.facebook.com/BE.Branding.Publicidad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-700 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </a>
          <a
            href="https://www.tiktok.com/@branding.emocion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </button>
          </a>
          <a
            href="https://www.instagram.com/brandingemocion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-700 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/company/branding-emocion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#0a66c2] px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="">
        <div className="fixed bottom-4 right-4 z-[60]">
          <a
            href="https://bit.ly/BrandingEmoci%C3%B3n-P%C3%A1ginagratis"
            target="_blank"
            title="Contacto via whatsapp"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white focus:outline-none"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
