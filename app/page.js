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
        <FloatingWhatsApp
          accountName="Branding Emocion"
          statusMessage="Disponible"
          chatMessage="Hola  en que puedo aydarte ?"
          phoneNumber="51969956846"
        />
      </div>
    </main>
  );
}
