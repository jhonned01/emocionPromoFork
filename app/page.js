"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
          <div className="w-full h-full">
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
          </div>
          <Carousel
            infiniteLoop
            autoPlay
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            className="lg:-ml-[245px]"
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

      <div className="p">
        <h1 className="text-[#3f85f5] text-center font-bold text-4xl">
          {" "}
          Elije tu Landing Page gratis
        </h1>
        {}
      </div>
    </main>
  );
}
