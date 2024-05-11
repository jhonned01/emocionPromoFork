"use client";

import { useState } from "react";
import ModalContact from "./ModalContact";

export default function Home() {
  const [StateModal, setStateModal] = useState(false);
  return (
    <main className=" bg-gradient-to-br from-[#0d1a2e] to-[#1b4681] min-h-screen overflow-auto">
      {StateModal && (
        <ModalContact setStateModal={setStateModal} StateModal={StateModal} />
      )}
      <div className="">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="w-full lg:w-4/5">
            <h1 className="mt-32 text-white text-5xl lg:text-6xl font-bold">
              Correo corporativo <br />
              <span className="text-blue-400">50 soles</span>
            </h1>
            <div className="container p-0 mx-auto text-white">
              <h1 className="text-2xl lg:text-4xl font-bold">
                App para móvil{" "}
              </h1>
              <h1 className="text-2xl lg:text-4xl font-bold">Interface web</h1>
              {/* <h1 className="text-2xl lg:text-4xl font-bold">
                En solo 2 horas
              </h1> */}

              <p className="text-lg mt-4">
                *Se aplican términos y condiciones{" "}
              </p>

              {/* <div className="flex items-center mt-4">
                <span className="text-lg font-bold">Precio:</span>
                <span className="text-3xl font-bold text-red-500 ml-4">
                  PEN $24.500
                </span>
                <span className="text-lg ml-4 line-through">( S/ 170 )</span>
              </div> */}
            </div>
          </div>

          <div className="hidden sm:block opacity-50 z-0">
            <div className="shadow-2xl w-96 h-96 rounded-full -mt-72 " />
            <div className="shadow-2xl w-96 h-96 rounded-full -mt-96  " />
            <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96  " />
          </div>
        </div>
      </div>
      <div className=" pt-10 lg:pt-0">
        <div className=" hidden lg:block  lg:absolute lg:-right-24 xl:right-0 lg:top-1/2 lg:h-[22rem] lg:w-[23rem] -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-2xl bg-gray-400" />
        <div className=" lg:absolute lg:-right-24 xl:right-0 lg:top-1/2 w-auto mx-5 lg:mx-0 lg:h-[22rem] lg:w-[23rem] lg:-translate-x-1/2 lg:-translate-y-1/2 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0">
          <div className="flex justify-end">
            <div className="h-4 w-4 rounded-full bg-gray-900" />
          </div>
          <header className="text-center text-xl font-extrabold text-gray-600">
            La oferta acaba pronto{" "}
          </header>
          <div>
            <p className="text-center text-3xl font-extrabold text-gray-900">
              Consigue un descuento
            </p>
            <p className="text-center text-5xl lg:text-6xl font-extrabold text-blue-500">
              (80%){" "}
            </p>
            {/* <p className="text-center text-4xl font-extrabold text-gray-900">
              de 
            </p> */}
          </div>
          <div className="mb-10 flex justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setStateModal(true);
              }}
              className="flex items-baseline gap-2 rounded-lg bg-[#0d1a2e] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#1b4681]"
            >
              <span>Obtener ahora</span>
              <i className="fas fa-hand-peace text-xl" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
