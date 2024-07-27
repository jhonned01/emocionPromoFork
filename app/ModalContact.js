"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { SendMail } from "./actions";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";

export default function ModalContact({
  setStateModal,
  StateModal,
  Proyecto,
  URL,
}) {
  const router = useRouter();

  return (
    <form
      action={async (formData) => {
        let callback = function () {
          if (typeof url === "string") {
            window.location = url;
          }
        };
        sendGAEvent({
          event: "ads_conversion_Enviar_formulario_de_cl_1",
          value: {
            event_callback: callback,
            event_timeout: 2000,
            // <event_parameters>
          },
        });
        const response = await SendMail(formData, Proyecto, URL);

        await router.push("/?Send=true");
      }}
    >
      <div className=" grid grid-cols-1   md:grid-cols-2 gap-x-4">
        <div className="mt-3">
          <Label htmlFor="NombreCompleto">Nombre Completo</Label>
          <input
            autoFocus
            type="text"
            name="NombreCompleto"
            id="NombreCompleto"
            required
            placeholder="Por favor ingrese el nombre completo"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="NombreEmpresa">Nombre de la Empresa</Label>

          <input
            type="text"
            name="NombreEmpresa"
            id="NombreEmpresa"
            required
            placeholder="Por favor ingrese el nombre de la empresa"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="Celular">Celular</Label>

          <PhoneInput
            placeholder="Por favor ingresa tu número de celular"
            defaultCountry="PE"
            onChange={() => {
              return;
            }}
            name="Celular"
            id="Celular"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="Correo">Correo Electrónico</Label>

          <input
            type="email"
            name="Correo"
            id="Correo"
            required
            placeholder="Por favor ingrese el correo"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-3 md:col-span-2">
          <Label htmlFor="Mensaje">Mensaje</Label>

          <Textarea
            className="mt-2"
            id="Mensaje"
            name="Mensaje"
            placeholder="Escribe tu mensaje aqui ..."
          />
        </div>
      </div>

      <Button className="bg-[#0d1a2e] mt-3 w-full" type="submit">
        Enviar
      </Button>
    </form>
  );
}
