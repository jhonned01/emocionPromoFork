"use client";

import { useState } from "react";
import ModalContact from "./ModalContact";
import Image from "next/image";

export default function Home() {
  const [StateModal, setStateModal] = useState(false);
  return (
    <main className=" bg-gradient-to-br from-[#0d1a2e] to-[#1b4681] flex items-center min-h-screen w-full overflow-auto">
      <div className="container  max-w-3xl  bg-white rounded-2xl    ">
        <div className=" flex justify-center items-center  flex-col pt-4 relative z-30 ">
          <Image
            src={"/LogoEmotionColor.svg"}
            width={300}
            height={300}
            alt="Logo"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="">
            <ModalContact />
          </div>
        </div>

        <div className="hidden sm:block opacity-50 z-0">
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-72 " />
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-96  " />
          <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96  " />
        </div>
      </div>
    </main>
  );
}
